import { Flex, Button, Title } from '@mantine/core';
import { selectedAnswers } from '../../pages/Quiz.page';
import { decodeHTML } from 'entities';
import { useEffect, useContext } from 'react';
import { QuestionType } from '@/types';
import { signal } from '@preact/signals';
import { TotalScoreContext } from '../TotalScoreContext';

export const checkSelectedAnswers = signal(false);

const CheckAnswersButton: React.FC<{ questions: QuestionType[] }> = ({ questions }) => {
  const { totalScore, setTotalScore } = useContext(TotalScoreContext);

  const calculateScore = () => {
    let updatedTotalScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers.value.get(i) === decodeHTML(questions[i].correct_answer)) {
        updatedTotalScore++;
      }
    }
    setTotalScore(updatedTotalScore);
  };

  useEffect(() => {
    if (checkSelectedAnswers.value) {
      calculateScore();
    }
  }, [checkSelectedAnswers.value]);

  return (
    <Flex justify="center" align="center" mt="md" gap="md">
      {checkSelectedAnswers.value && (
        <Title size={'h2'} ta={'center'}>
          You scored {totalScore}/{questions.length} correct answers.
          <br />
          {totalScore === questions.length && (
            <>
              <span>Congrats! You're a trivia master!</span>
              <br />
              <span role="img" style={{ textAlign: 'center' }} aria-label="party-popper">
                🥳🥳🥳
              </span>
            </>
          )}
        </Title>
      )}
      <Button
        variant="filled"
        size="lg"
        onClick={() => {
          if (checkSelectedAnswers.value) {
            window.location.reload();
          } else {
            checkSelectedAnswers.value = true;
          }
        }}
      >
        {checkSelectedAnswers.value ? 'Play Again?' : 'Check Answers'}
      </Button>
    </Flex>
  );
};

export default CheckAnswersButton;
