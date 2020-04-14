import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../styles/Cards.css';
import { useAsync } from 'react-async';
import { CardContext } from '../context/index';

const loadCards = async () =>
  await fetch('http://localhost:5000/cards/')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function Cards() {
  // Get card data from the card context
  const appContext = useContext(CardContext);
  const { cards } = appContext;

  // handle "purchase" button click
  // redirect to page for individual card that was clicked
  function handleButtonClick(name) {
    window.location.assign(`/card/${name}`);
  }

  // const { data, error, isLoading } = useAsync({ promiseFn: loadCards }); //hooks
  // if (isLoading) return 'Loading...';
  // if (error) return `Something went wrong: ${error.message}`;
  // if (data)
  // The rendered component
  return (
    <div className="container">
      {cards.map(card => (
        <div key={card._id} className="cards-grid">
          <Card style={{ width: '20rem' }}>
            <Card.Header as="h5">
              {card.images ? (
                <Card.Img src={card.images.image} alt="Card Image" />
              ) : (
                <p> No Image Available</p>
              )}
            </Card.Header>
            <Card.Body>
              <Card.Text>Type: {card.name}</Card.Text>
              <Card.Text>Type: {card.type}</Card.Text>
              <Card.Text>Race: {card.race}</Card.Text>
              <Card.Text>Archetype: {card.archetype}</Card.Text>
            </Card.Body>
            <ListGroup className="list-card-details">
              <ListGroupItem>Attack - {card.atk}</ListGroupItem>
              <ListGroupItem>Level - {card.level}</ListGroupItem>
              <ListGroupItem>Def - {card.def}</ListGroupItem>
            </ListGroup>
            <Button onClick={() => handleButtonClick(`${card.name}`)} variant="primary">
              Purchase
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
