// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

console.log('Setting up tests...');

jest.mock(
  '@mui/material/Hidden',
  () => (props: React.PropsWithChildren<Record<string, unknown>>) =>
    props.children
);
