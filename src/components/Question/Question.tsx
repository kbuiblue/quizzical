import { Title, Box } from '@mantine/core';
import { decodeHTML } from 'entities';
import { QuestionType } from '@/types';
import Answers from '../Anwers/Answers';

export default function Question({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}: QuestionType) {
  return (
    <Box>
      <Title>{decodeHTML(question)}</Title>
      <Answers correct_answer={correct_answer} incorrect_answers={incorrect_answers} />
    </Box>
  );
}
