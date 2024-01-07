import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../components/game-components/Card.jsx';

describe('Card Component', () => {
  test('renders with the correct suit and rank', () => {
    const { queryAllByText } = render(<Card suit="♣" rank="10" />);
    const suitElements = queryAllByText('♣');
    expect(suitElements.length).toBe(2);

    const rankElements = queryAllByText('10');
    expect(rankElements.length).toBe(2);

  });

  test('renders black card for ♣︎ or ♠︎', () => {
    const { container } = render(<Card suit="♣︎" rank="A" />);
    expect(container.firstChild).toHaveClass('card-black');
  });

  // Add more tests for different scenarios...
});
