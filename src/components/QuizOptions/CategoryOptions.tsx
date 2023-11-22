import { Combobox, useCombobox, InputBase, Title } from '@mantine/core';
import { OptionsType } from '@/types';

export default function CategoryOptions({ options, setOptions }: OptionsType) {
  const categories = new Map([
    ['any', 'Any Category'],
    ['9', 'General Knowledge'],
    ['10', 'Entertainment: Books'],
    ['11', 'Entertainment: Film'],
    ['12', 'Entertainment: Music'],
    ['13', 'Entertainment: Musicals & Theatres'],
    ['14', 'Entertainment: Television'],
    ['15', 'Entertainment: Video Games'],
    ['16', 'Entertainment: Board Games'],
    ['17', 'Science & Nature'],
    ['18', 'Science: Computers'],
    ['19', 'Science: Mathematics'],
    ['20', 'Mythology'],
    ['21', 'Sports'],
    ['22', 'Geography'],
    ['23', 'History'],
    ['24', 'Politics'],
    ['25', 'Art'],
    ['26', 'Celebrities'],
    ['27', 'Animals'],
    ['28', 'Vehicles'],
    ['29', 'Entertainment: Comics'],
    ['30', 'Science: Gadgets'],
    ['31', 'Entertainment: Japanese Anime & Manga'],
    ['32', 'Entertainment: Cartoon & Animations'],
  ]);

  const categoriesBox = useCombobox({
    onDropdownClose: () => categoriesBox.resetSelectedOption(),
  });

  const categoryOptions = Array.from(categories.entries()).map(([key, value]) => (
    <Combobox.Option value={key} key={key}>
      {value}
    </Combobox.Option>
  ));

  return (
    <div>
      <Combobox
        classNames={{ dropdown: 'option' }}
        size="md"
        store={categoriesBox}
        onOptionSubmit={(value) => {
          setOptions((prevOptions) => ({
            ...prevOptions,
            category: value,
          }));
          categoriesBox.closeDropdown();
        }}
      >
        <Title order={5}>Select category:</Title>
        <Combobox.Target>
          <InputBase
            size="lg"
            component="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => categoriesBox.toggleDropdown()}
          >
            {categories.get(options.category)}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
            {categoryOptions}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
