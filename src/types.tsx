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
