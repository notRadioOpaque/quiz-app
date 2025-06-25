export interface Category {
  id: number;
  name: string;
}

export interface Option {
  optionText: string;
  isAnswer: boolean;
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
}

export interface AnsweredQuestion {
  question: Question;
  answer: string; // the optionText selected
}
