declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveAttribute(attribute: string, value?: string): R;
    }
  }
}

type MatcherFunction = (
  received: HTMLElement,
  attribute: string,
  value?: string
) => {
  pass: boolean;
  message: () => string;
};

export const toHaveAttribute: MatcherFunction = (
  received: HTMLElement,
  attribute: string,
  value?: string
) => {
  const pass =
    received.hasAttribute(attribute) && (!value || received.getAttribute(attribute) === value);

  return {
    pass,
    message: () =>
      `Expected element ${pass ? 'not ' : ''}to have attribute ${attribute} with value ${value}`,
  };
};
