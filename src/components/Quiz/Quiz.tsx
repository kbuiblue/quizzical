import { Flex, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import Question from '../Question/Question';
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
      direction="column"
      justify="center"
      align="center"
      gap="lg"
      mt="md"
      mx="auto"
    >
      {questions?.map(
        (question, index) => isQuestion(question) && <Question key={index} {...question} />
      )}
    </Flex>
  );
}
