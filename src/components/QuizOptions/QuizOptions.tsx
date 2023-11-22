import { Flex, Title, TextInput } from '@mantine/core';
import { useState, useEffect } from 'react';
import { QuizOptionsType } from '@/types';
import styles from './QuizOptions.module.css';
import CategoryOptions from './CategoryOptions';
import DifficultyOptions from './DifficultyOptions';
import TypeOptions from './TypeOptions';
import StartButton from '../Buttons/StartButton';

export default function QuizOptions() {
  const [options, setOptions] = useState<QuizOptionsType>({
    numberOfQuestions: 5,
    category: 'any',
    difficulty: 'any',
    type: 'any',
  });

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timeoutId = setTimeout(() => {
      if (
        parseInt(e.target.value) !== options.numberOfQuestions &&
        parseInt(e.target.value) >= 1 &&
        parseInt(e.target.value) <= 50
      ) {
        setOptions((prevOptions) => ({
          ...prevOptions,
          numberOfQuestions: parseInt(e.target.value),
        }));
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  };

  useEffect(() => {
    console.log(options);
    localStorage.setItem('quizOptions', JSON.stringify(options));
  }, [options]);

  return (
    <Flex className={styles.QuizOptionsContainer} direction="column" justify="center" align="center" mt="lg" mb="lg">
      <Title order={2}>Quiz Options</Title>
      <Flex direction="column" justify="center" align="center" gap="sm" mt="lg" mb="lg">
        <TextInput
          className={styles.option}
          label="Number of questions:"
          placeholder="From 1 to 50"
          type="number"
          min="1"
          max="50"
          size="md"
          onChange={handleTextInput}
        ></TextInput>
        <CategoryOptions options={options} setOptions={setOptions} />
        <DifficultyOptions options={options} setOptions={setOptions} />
        <TypeOptions options={options} setOptions={setOptions} />
      </Flex>
    </Flex>
  );
}
