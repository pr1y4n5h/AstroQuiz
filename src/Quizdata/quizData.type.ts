export type Options = {
  id: string;
  option: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  question: string;
  score: number;
  negativeScore: number;
  options: Options[];
  selectedOptionId?: string | null;
};

export type Quiz = {
  id: string;
  name: string;
  image: string;
  totalScore: number;
  questions: Array<Question>;
};
