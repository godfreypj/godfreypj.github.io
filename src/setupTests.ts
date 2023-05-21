// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

console.log('Setting up tests...');

jest.mock(
  '@mui/material/Hidden',
  () => (props: React.PropsWithChildren<Record<string, unknown>>) =>
    props.children
);

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window as unknown as Window & typeof globalThis;
global.document = dom.window.document;
global.navigator = {
  ...(global.navigator || {}),
  userAgent: 'node.js',
};
// Set the test environment to 'jsdom'
process.env.JEST_ENV = 'jsdom';
