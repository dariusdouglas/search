import React, { useState, useEffect } from 'react';
// Using context allows the card data to be shared between all components

/* Creates a Context object. 
When React renders a component that subscribes to this Context object it will read the 
current context value from the closest matching Provider above it in the tree.

The Provider gives us a way to pass all the data and states as props from the topmost part of 
React tree to wherever we would like to consume it.
*/
const CardContext = React.createContext();

const CardProvider = props => {
  const url = 'http://localhost:5000/cards/';

  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await fetch(url);
      const cards = await response.json();
      setCards(cards);
    } catch (err) {
      console.log('fetchCards -> err', err);
      return;
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return <CardContext.Provider value={{ cards }}>{props.children}</CardContext.Provider>;
};

export { CardProvider, CardContext };
