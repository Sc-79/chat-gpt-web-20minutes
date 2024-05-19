import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TestEvents from './TestEvents'; // Assuming TestEvents is in the same directory
// import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

describe('TestEvents component', () => {
  it('should initially render a counter of 0', () => {
    render(<TestEvents />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toBeInTheDocument(); // Assert element exists
    expect(counterElement).toHaveTextContent('0'); // Assert initial value
  });

  it('should increment the counter when the "Up" button is clicked', () => {
    render(<TestEvents />);
    const counterElement = screen.getByTestId('counter');
    const upButton = screen.getByTestId('button-up');

    expect(counterElement).toHaveTextContent('0');

    fireEvent.click(upButton);
    expect(counterElement).toHaveTextContent('1');
  });

  it('should decrement the counter when the "Down" button is clicked', () => {
    render(<TestEvents />);
    const counterElement = screen.getByTestId('counter');
    const downButton = screen.getByTestId('button-down');

    expect(counterElement).toHaveTextContent('0');

    fireEvent.click(downButton);
    expect(counterElement).toHaveTextContent('-1'); // Handle negative values
  });
});
