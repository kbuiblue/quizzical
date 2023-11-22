import { AnswersType } from '@/types';
import { selectedAnswers } from '../../pages/Quiz.page';
import { decodeHTML } from 'entities';
import { useState, useEffect } from 'react';
import { Chip, Group } from '@mantine/core';
import { checkSelectedAnswers } from '../Buttons/CheckAnswersButton';
import styles from '../Anwers/Answers.module.css';

export default function Answers({ id, correct_answer, incorrect_answers }: AnswersType) {
  const [allAnswers, setAllAnswers] = useState([correct_answer, ...incorrect_answers]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const shuffleAnswers = (answers: string[]) => {
    let currentIndex: number = answers.length,
      randomIndex: number;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]];
    }

    return answers;
  };

  useEffect(() => {
    if (isInitialRender) {
      const shuffledAnswers = shuffleAnswers(allAnswers);
      setAllAnswers(shuffledAnswers);
      setIsInitialRender(false);
    }
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
              className={`${styles.answer} ${checkSelectedAnswers.value ? styles.isChecked : ''} ${
                index === allAnswers.indexOf(selectedAnswers.value.get(id) || '' ) && index === allAnswers.indexOf(correct_answer)
                  ? styles.isSelected
                  : ''
              } ${
                index === allAnswers.indexOf(correct_answer) && checkSelectedAnswers.value
                  ? styles.isCorrect
                  : styles.isIncorrect
              }`}
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
