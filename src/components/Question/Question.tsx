import { Title, Box } from '@mantine/core';
import { decodeHTML } from 'entities';
import { QuestionType } from '@/types';
import Answers from '../Anwers/Answers';

export default function Question({
  id,
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}: QuestionType) {
  return (
    <Box py="sm" ta="center">
      <Title size="h2">{decodeHTML(question)}</Title>
      <Answers id={id} correct_answer={correct_answer} incorrect_answers={incorrect_answers} />
    </Box>
  );
}
