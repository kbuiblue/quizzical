import { Button, Group, Anchor } from '@mantine/core';

export default function StartButton() {
  return (
    <Group justify="center" mt="m">
      <Anchor href="/quiz">
        <Button mt="xl" variant="filled" size="lg" color="rgb(197, 59, 82)">
          Get Started
        </Button>
      </Anchor>
    </Group>
  );
}
