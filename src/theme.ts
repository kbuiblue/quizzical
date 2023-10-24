import { createTheme, Button } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'rgb(197, 59, 82)',
        variant: 'filled',
      },
    }),
  },
});
