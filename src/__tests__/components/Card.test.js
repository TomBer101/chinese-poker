import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../components/game-components/Card.jsx';

describe('Card Component', () => {
  test('renders with the correct suit and rank', () => {
    const { queryAllByText } = render(<Card suit="♣" rank="10" />);
    const suitElements = queryAllByText('♣');
    expect(suitElements.length).toBe(2);

    const rankElements = queryAllByText('10');
    expect(rankElements.length).toBe(1);

  });

  test('renders black card for ♣︎ or ♠︎', () => {
    const { container } = render(<Card suit="♣︎" rank="A" />);
    expect(container.firstChild).toHaveClass('card-black');
  });

  test('renders children when provided', () => {
    const { getByText } = render(
      <Card suit="♠︎" rank="Q">
        <div>Child Content</div>
      </Card>
    );

    const childElement = getByText('Child Content');
    expect(childElement).toBeInTheDocument();
  });

  
  test('renders back image when flip is true', () => {
    const { container } = render(<Card suit="♦" rank="K" flip={true} />);
    const backImage = container.querySelector('img[src="images/cards/BACK.svg"]');
    expect(backImage).toBeInTheDocument();
  });

});
