export interface QuestionType {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface AnswersType {
  id: number;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizOptionsType {
  numberOfQuestions: number;
  category: string;
  difficulty: string;
  type: string;
}

export interface OptionsType {
  options: QuizOptionsType,
  setOptions: React.Dispatch<React.SetStateAction<QuizOptionsType>>
}
