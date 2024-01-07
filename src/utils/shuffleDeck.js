function shuffleDeck(cards) {
    const n = cards.length;
    // Shuffle the deck using the Fisher-Yates algorithm
    for (let i = 0; i < n; i++) {
        // Random for remaining positions.
        let r = i + (Math.floor(Math.random() * (52 - i)));
        let tmp = cards[i];
        cards[i] = cards[r];
        cards[r] = tmp;
      }

    return cards;
}



export default shuffleDeck;
