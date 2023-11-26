import { Title, Text } from '@mantine/core';
import styles from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={styles.title} ta="center" mt="xl">
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Quizzical
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={480} mx="auto" mt="xl">
        A fun and simple quiz game.
        <br />
        Test your worldly knowledge with this quick quiz.
        <br />
        Are you ready?
      </Text>
    </>
  );
}
