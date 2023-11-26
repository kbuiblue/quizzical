import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="flex-end" mt="xl" mx="sm">
      <Button variant="light" onClick={() => setColorScheme('light')}>
        Light
      </Button>
      <Button variant="outline" onClick={() => setColorScheme('dark')}>
        Dark
      </Button>
      <Button variant="subtle" onClick={() => setColorScheme('auto')}>
        Auto
      </Button>
    </Group>
  );
}
