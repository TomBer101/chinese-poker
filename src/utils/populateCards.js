import cardsInfo from "./cardsInfo.json";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const populateCards = () => {
  const cards = [];
  console.log('in populate');
  cardsInfo["value"].forEach((value) => {
    cardsInfo["suit"].forEach((suit) => {
        cards.push({
          value: value,
          suit: suit,
        });
      
    });
  });

  const shuffledCards = shuffle(cards);

  return shuffledCards;
};

export default populateCards;