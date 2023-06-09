---
id: dnalkmro
title: Jest
file_version: 1.1.2
app_version: 1.9.2
---

## Getting Started...

Adhere to typical React standards:

*   Every React component gets it's own `.tsx`file

*   Every React component shall be tested; main component gets a `.test.tsx`file

    *   subcomponents are tested from that main file unless it does not make sense to do so

*   A Jest test follows the following steps (generally):
1.  **Importing** the necessary modules and components that you need for your test. This could include the React component you want to test, as well as any testing utilities from React Testing Library.

2.  **Rendering** the component you want to test using the `render` function from React Testing Library.

3.  **Querying** the rendered component to get access to its elements using one of the query functions provided by React Testing Library.

4.  **Interacting** with the component by simulating user events such as clicking or typing using the `fireEvent` function from React Testing Library.

5.  **Asserting** that the component behaves as expected by checking its state or output using Jest’s `expect` function and its various matchers.

6.  **Repeating** steps 3-5 as necessary to test different scenarios and behaviors of your component.

    <br/>

<br/>

Here is a very basic example from the Footer component
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/Footer.test.tsx
```tsx
5      describe('Footer', () => {
6        it('renders the footer', () => {
7          const { getByText } = render(<Footer />);
8          const footerText = getByText(/godfreypj/i);
9          expect(footerText).toBeInTheDocument;
10       });
11     });
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBZ29kZnJleXBqLmdpdGh1Yi5pbyUzQSUzQWdvZGZyZXlwag==/docs/dnalkmro).
