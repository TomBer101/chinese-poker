import React from 'react';
import { render } from '@testing-library/react';
import Hand from '../../components/game-components/Hand';



describe('Hand Component', () => {

  const cards = [
    { suit: "♥︎", rank: 'A' },
    { suit: "♠︎", rank: '2' },
    { suit: "♣︎", rank: '3' },
    { suit: "♦︎", rank: '6' },
    { suit: "♣︎", rank: '9' },
  ];

  const getCardDetails = (container, card) => {
    const cardElement = container.querySelector(".card-holder");
    const rankElement = container.querySelector(`[data-testid="rank-${card.rank}"]`);
    const suitElement = container.querySelector(`[data-testid="suit-${card.suit}"]`);

    return { cardElement, rankElement, suitElement };
  };

  test('renders Hand component with cards', () => {


    const { container } = render(<Hand cards={cards} listID="someListID" />);

    const cardHolderElements = container.querySelectorAll('.card-holder');
    expect(cardHolderElements.length).toBe(5);

  });

  test('render last card flipped', () => {
    const { container } = render(<Hand cards={cards} listID="someListID" />);
    const cardHolderElements = container.querySelectorAll('.card-holder');
    const lastCardElement = cardHolderElements[cardHolderElements.length - 1];
    const backImageElement = lastCardElement.querySelector('img');

    expect(backImageElement).toBeInTheDocument();
    expect(backImageElement).toHaveAttribute('src', 'images/cards/BACK.svg');
    expect(backImageElement).toHaveAttribute('alt', 'card_back');

  });


})
