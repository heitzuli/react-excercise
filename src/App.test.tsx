import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders people header', () => {
  render(<App />);
  const h1 = screen.getByText(/Here\'s the people/i);
  expect(h1).toBeInTheDocument();
});
