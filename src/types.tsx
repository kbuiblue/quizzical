export interface QuestionType {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface AnswersType {
  correct_answer: string;
  incorrect_answers: string[];
}
