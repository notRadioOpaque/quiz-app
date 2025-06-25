const mockCategories = [
  { id: 1, name: "General Knowledge" },
  { id: 2, name: "Science" },
  { id: 3, name: "History" },
];

const mockQuestions = {
  1: [
    {
      id: 101,
      questionText: "What is the capital of France?",
      options: [
        { optionText: "Paris", isAnswer: true },
        { optionText: "London", isAnswer: false },
        { optionText: "Berlin", isAnswer: false },
        { optionText: "Madrid", isAnswer: false },
      ],
    },
    {
      id: 102,
      questionText: "Which ocean is the largest?",
      options: [
        { optionText: "Atlantic", isAnswer: false },
        { optionText: "Indian", isAnswer: false },
        { optionText: "Pacific", isAnswer: true },
        { optionText: "Arctic", isAnswer: false },
      ],
    },
  ],
  2: [
    {
      id: 201,
      questionText: "What planet is known as the Red Planet?",
      options: [
        { optionText: "Mars", isAnswer: true },
        { optionText: "Venus", isAnswer: false },
        { optionText: "Jupiter", isAnswer: false },
        { optionText: "Saturn", isAnswer: false },
      ],
    },
  ],
  3: [
    {
      id: 301,
      questionText: "Who was the first President of the United States?",
      options: [
        { optionText: "George Washington", isAnswer: true },
        { optionText: "Abraham Lincoln", isAnswer: false },
        { optionText: "Thomas Jefferson", isAnswer: false },
        { optionText: "John Adams", isAnswer: false },
      ],
    },
  ],
};

export const getCategories = () => Promise.resolve({ data: mockCategories });

export const getQuestionsByCategory = (id: string) =>
  Promise.resolve({ data: mockQuestions[id] });

export const getAllQuestions = () => {
  const all = Object.values(mockQuestions).flat();
  return Promise.resolve({ data: all });
};

export const getQuestionById = (id: number) => {
  const all = Object.values(mockQuestions).flat();
  const found = all.find((q) => q.id === Number(id));
  return Promise.resolve({ data: found });
};
