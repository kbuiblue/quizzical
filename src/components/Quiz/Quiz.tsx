import { Flex, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import Question from '../Question/Question';
import CheckAnswersButton from '../Buttons/CheckAnswersButton';
import { TotalScoreProvider } from '../TotalScoreContext';
import { QuestionType } from '@/types';

export default function Quiz() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    async function getQuestions() {
      const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
    }

    getQuestions();
  }, []);

  const isQuestion = (x: any): x is QuestionType => questions.includes(x);

  return (
    <Flex
      pos="relative"
      direction="column"
      justify="center"
      align="center"
      gap="xl"
      mt="lg"
      px="md"
      mx="auto"
      w="80vw"
      h="90vh"
    >
      <TotalScoreProvider>
        {questions?.map(
          (question, index) =>
            isQuestion(question) && <Question key={index} {...question} id={index} />
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
