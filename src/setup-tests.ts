// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// import { JSDOM } from 'jsdom';

console.log('Setting up tests...');

const mockHidden = (
  properties: React.PropsWithChildren<Record<string, unknown>>
) => properties.children;

jest.mock('@mui/material/Hidden', () => mockHidden);

// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = dom.window as unknown as Window & typeof globalThis;
// global.document = dom.window.document;
// global.navigator = {
//   ...(global.navigator || {}),
//   userAgent: 'node.js',
// };
// Set the test environment to 'jsdom'
process.env.JEST_ENV = 'jsdom';
