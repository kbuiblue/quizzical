import { Button, Group, Anchor } from '@mantine/core';

export default function StartButton() {
  return (
    <Group justify="center" my="xl">
      <Anchor href="/quiz">
        <Button variant="filled" size="lg" mb="xl">
          Get Started
        </Button>
      </Anchor>
    </Group>
  );
}
