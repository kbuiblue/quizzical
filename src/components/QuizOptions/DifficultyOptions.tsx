import { Combobox, useCombobox, InputBase, Title } from '@mantine/core';
import { OptionsType } from '@/types';

export default function DifficultyOptions({ options, setOptions }: OptionsType) {
  const difficulties = new Map([
    ['any', 'Any Difficulty'],
    ['easy', 'Easy'],
    ['medium', 'Medium'],
    ['hard', 'Hard'],
  ]);

  const difficultiesBox = useCombobox({
    onDropdownClose: () => difficultiesBox.resetSelectedOption(),
  });

  const difficultyOptions = Array.from(difficulties.entries()).map(([key, value]) => (
    <Combobox.Option value={key} key={key}>
      {value}
    </Combobox.Option>
  ));

  return (
    <div>
      <Combobox
        classNames={{ dropdown: 'option' }}
        size="md"
        store={difficultiesBox}
        onOptionSubmit={(value) => {
          setOptions((prevOptions) => ({
            ...prevOptions,
            difficulty: value,
          }));
          difficultiesBox.closeDropdown();
        }}
      >
        <Title order={5}>Select difficulty:</Title>
        <Combobox.Target>
          <InputBase
            size="lg"
            component="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => difficultiesBox.toggleDropdown()}
          >
            {difficulties.get(options.difficulty)}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
            {difficultyOptions}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
