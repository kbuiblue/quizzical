import { AnswersType } from '@/types';
import { selectedAnswers } from '../../pages/Quiz.page';
import { decodeHTML } from 'entities';
import { useState, useEffect } from 'react';
import { Chip, Group } from '@mantine/core';
import styles from '../Anwers/Answers.module.css';

export default function Answers({ id, correct_answer, incorrect_answers }: AnswersType) {
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

  useEffect(() => {
    const shuffledAnswers = shuffleAnswers(allAnswers);
    setAllAnswers(shuffledAnswers);
  }, []);

  return (
    <Chip.Group multiple={false}>
      <Group wrap="wrap" justify="center" align="center" mt="xl" px="lg">
        {allAnswers.map((answer, index) => {
          const decodedAnswer = decodeHTML(answer);

          return (
            <Chip
              key={index}
              value={decodedAnswer}
              className={styles.answer}
              onClick={() => {
                selectedAnswers.value.set(id, decodedAnswer);
              }}
            >
              {decodedAnswer}
            </Chip>
          );
        })}
      </Group>
    </Chip.Group>
  );
}
