import  shuffleDeck  from '../../utils/shuffleDeck'; // Import your shuffling function
import CardsDeck from '../../utils/deck';

describe('shuffleCards Function', () => {
  test('shuffles the cards array differently at least twice', () => {
    const originalCards = [...CardsDeck];
    const shuffleResults = new Set();

    debugger;
    for (let i = 0; i < 5; i++) {
      let arr = shuffleDeck(originalCards);
      shuffleResults.add(JSON.stringify(arr));
    }

    const uniqueResults = new Set(shuffleResults);
    const atLeastTwoDifferent = uniqueResults.size >= 2;

    expect(atLeastTwoDifferent).toBe(true);
  });
});
