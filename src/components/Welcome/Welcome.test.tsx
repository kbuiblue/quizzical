import { render, screen } from '@test-utils';
import { Welcome } from './Welcome';
import { toHaveAttribute } from './jest-matchers';

expect.extend({ toHaveAttribute });

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
