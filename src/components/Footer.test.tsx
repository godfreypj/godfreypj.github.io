import { render } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';

describe('Footer', () => {
  it('renders the footer', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(/godfreypj/i);
    expect(footerText).toBeInTheDocument;
  });
});
