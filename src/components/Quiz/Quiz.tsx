import { Flex, LoadingOverlay, Alert } from '@mantine/core';
import { useEffect, useState } from 'react';
import Question from '../Question/Question';
import CheckAnswersButton from '../Buttons/CheckAnswersButton';
import { TotalScoreProvider } from '../TotalScoreContext';
import { QuizOptionsType, QuestionType } from '@/types';
import styles from '../Quiz/Quiz.module.css';

export default function Quiz() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getQuestions = async (quizOptions: QuizOptionsType) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${quizOptions.numberOfQuestions}${
          quizOptions.category !== 'any' ? `&category=${quizOptions.category}` : ''
        }${quizOptions.difficulty !== 'any' ? `&difficulty=${quizOptions.difficulty}` : ''}${
          quizOptions.type !== 'any' ? `&type=${quizOptions.type}` : ''
        }`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch questions.');
      }

      const data = await response.json();
      setQuestions(data.results);
    } catch (error: unknown) {
      console.error('Error:', error);
      setError(error as Error);
    }
  };

  useEffect(() => {
    const quizOptions = localStorage.getItem('quizOptions');

    if (quizOptions) {
      getQuestions(JSON.parse(quizOptions));
    }
  }, []);

  const isQuestion = (x: any): x is QuestionType => questions.includes(x);

  return (
    <Flex
      className={styles.quiz}
      pos="relative"
      direction="column"
      justify="center"
      align="center"
      gap="xl"
      mt="lg"
      px="md"
      mx="auto"
      w="80vw"
      mih="90vh"
    >
      <TotalScoreProvider>
        {questions?.map(
          (question, index) =>
            isQuestion(question) && <Question key={index} {...question} id={index} />
        )}
        {error && (
          <Alert
            className={styles.alert}
            variant="light"
            color="red"
            withCloseButton
            title={error.name}
          >
            `Failed to fetch questions. Please refresh the page and try again.`
          </Alert>
        )}
        <LoadingOverlay
          pos={'absolute'}
          visible={questions.length === 0}
          overlayProps={{ radius: 'sm', backgroundOpacity: 0 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {questions.length > 0 && <CheckAnswersButton questions={questions} />}
      </TotalScoreProvider>
    </Flex>
  );
}
