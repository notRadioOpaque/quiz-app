/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import type { AnsweredQuestion, Question } from "../types";
import { getQuestionsByCategory } from "../services/mock-quiz";

export default function Quiz() {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryId) return;

    getQuestionsByCategory(categoryId)
      .then((res) => setQuestions(res.data))
      .catch(console.error);
  }, [categoryId]);

  const handleSelect = (answer: string) => {
    setAnswers([...answers, { question: questions[current], answer }]);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/result", { state: { answers } });
    }
  };

  if (!questions.length) return <p>Loading...</p>;

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold">
        Question {current + 1} of {questions.length}
      </h2>
      <QuizCard
        question={questions[current].questionText}
        options={questions[current].options.map((o: any) => o.optionText)}
        onSelect={handleSelect}
      />
    </div>
  );
}
