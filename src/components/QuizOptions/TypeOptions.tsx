import { Combobox, useCombobox, InputBase, Title } from '@mantine/core';
import { OptionsType } from '@/types';

export default function DifficultyOptions({ options, setOptions }: OptionsType) {
  const types = new Map([
    ['any', 'Any Type'],
    ['multiple', 'Multiple Choice'],
    ['boolean', 'True/False'],
  ]);

  const typesBox = useCombobox({
    onDropdownClose: () => typesBox.resetSelectedOption(),
  });

  const typeOptions = Array.from(types.entries()).map(([key, value]) => (
    <Combobox.Option value={key} key={key}>
      {value}
    </Combobox.Option>
  ));

  return (
    <div>
      <Combobox
        classNames={{ dropdown: 'option' }}
        size="md"
        store={typesBox}
        onOptionSubmit={(value) => {
          setOptions((prevOptions) => ({
            ...prevOptions,
            type: value,
          }));
          typesBox.closeDropdown();
        }}
      >
        <Title order={5}>Select type:</Title>
        <Combobox.Target>
          <InputBase
            size="lg"
            component="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => typesBox.toggleDropdown()}
          >
            {types.get(options.type)}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
            {typeOptions}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
