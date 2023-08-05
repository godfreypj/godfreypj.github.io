// src/App.test.js
import { renderWithAccessibility } from './setupA11yTests';
import App from './App';

test('my app renders without violations', async () => {
  await renderWithAccessibility(<App />);
});
