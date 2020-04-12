import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Card.scss';

function Card() {
  const [card, getCard] = useState({});
  const { name } = useParams();

  // same as componentDidMount, passing empty screen ensure call is only when component mounts, not when it updates
  useEffect(() => {
    async function FetchData() {
      try {
        console.log(name);
        const res = await fetch(`http://localhost:5000/cards/${name}`);
        const card = await res.json();
        getCard(card);
      } catch (err) {
        console.log('error');
        return;
      }
    }
    FetchData();
  }, []);

  return (
    <div class="row">
      {card.images ? (
        <>
          <div class="card-individual">
            <div class="card-image">
              <img class="image" src={card.images.image} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <div class="item-content">
        <p>Name: {card.name}</p>
        <p>Type: {card.type}</p>
        <p>Race: {card.race}</p>
        <p>Archetype: {card.archetype}</p>
        <p>Attack - {card.atk}</p>
        <p>Def - {card.def}</p>
      </div>
    </div>
  );
}

export default Card;
