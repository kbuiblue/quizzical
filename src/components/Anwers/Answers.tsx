import { AnswersType } from '@/types';
import { totalScore } from '@/pages/Quiz.page';
import { decodeHTML } from 'entities';
import { useState } from 'react';
import { Chip, Group } from '@mantine/core';

export default function Answers({ correct_answer, incorrect_answers }: AnswersType) {
  const [allAnswers, setAllAnswers] = useState([correct_answer, ...incorrect_answers]);

  const shuffleAnswers = (answers: string[]) => {
    let currentIndex: number = answers.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]];
    }

    return answers;
  };

  const shuffledAnswers = shuffleAnswers(allAnswers);
  setAllAnswers(shuffledAnswers);

  return (
    <Chip.Group multiple={false}>
      <Group justify="center" mt="xl">
        {allAnswers.map((answer, index) => {
          return (
            <Chip key={index} value={decodeHTML(answer)}>
              {decodeHTML(answer)}
            </Chip>
          );
        })}
      </Group>
    </Chip.Group>
  );
}
