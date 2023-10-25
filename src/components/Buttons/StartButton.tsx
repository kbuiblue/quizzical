import { Button, Group, Anchor } from '@mantine/core';

export default function StartButton() {
  return (
    <Group justify="center" mt="md">
      <Anchor href="/quiz">
        <Button mt="xl" variant="filled" size="lg">
          Get Started
        </Button>
      </Anchor>
    </Group>
  );
}
