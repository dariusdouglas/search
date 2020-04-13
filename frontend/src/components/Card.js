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
        const res = await fetch(`http://localhost:5000/cards/${name}`);
        const card = await res.json();
        getCard(card);
      } catch (err) {
        console.log('error');
        return;
      }
    }
    FetchData();
  }, [name, card]);

  try {
    return (
      <div className="row">
        {card && card.image ? (
          <>
            <div className="card-individual">
              <div className="card-image">
                <img className="image" src={card.images.image} />
              </div>
            </div>

            <div className="item-content">
              <p> Item Description Here</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div>
          Add to cart button here... Probably should be it's own component and not in the card.js
          file
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div>
        {console.warn(err)}
        {console.warn('heeeeeere')}
        <p>Error in console</p>
      </div>
    );
  }
}

export default Card;
