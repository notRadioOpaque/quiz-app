/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  if (!state?.answers) return <p>No answers submitted.</p>;

  const score = state.answers.reduce((acc: number, curr: any) => {
    const correct = curr.question.options.find(
      (o: any) => o.isAnswer
    )?.optionText;
    return acc + (curr.answer === correct ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-bold">Result</h2>
      <p className="text-lg">
        You scored {score} out of {state.answers.length}
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
