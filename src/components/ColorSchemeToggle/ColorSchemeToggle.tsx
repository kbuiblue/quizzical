import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="flex-end" mt="xl" mx="sm">
      <Button color="rgb(197, 59, 82)" onClick={() => setColorScheme('light')}>Light</Button>
      <Button color="rgb(197, 59, 82)" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button color="rgb(197, 59, 82)" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
