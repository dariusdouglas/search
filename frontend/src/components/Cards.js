import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../styles/Cards.css';
import { useAsync } from 'react-async';

const loadCards = async () =>
  await fetch('http://localhost:5000/cards/')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function Cards() {
  function handleButtonClick(name) {
    window.location.assign(`/card/${name}`);
  }

  const { data, error, isLoading } = useAsync({ promiseFn: loadCards }); //hooks
  if (isLoading) return 'Loading...';
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    // The rendered component
    return (
      <div className="container">
        {data.map(pokemon => (
          <div key={pokemon._id} className="cards-grid">
            <Card style={{ width: '20rem' }}>
              <Card.Header as="h5">
                <Card.Img src={pokemon.images.image} alt="Card Image" />
              </Card.Header>
              <Card.Body>
                <Card.Text>Type: {pokemon.name}</Card.Text>
                <Card.Text>Type: {pokemon.type}</Card.Text>
                <Card.Text>Race: {pokemon.race}</Card.Text>
                <Card.Text>Archetype: {pokemon.archetype}</Card.Text>
              </Card.Body>
              <ListGroup className="list-card-details">
                <ListGroupItem>Attack - {pokemon.atk}</ListGroupItem>
                <ListGroupItem>Level - {pokemon.level}</ListGroupItem>
                <ListGroupItem>Def - {pokemon.def}</ListGroupItem>
              </ListGroup>
              <Button onClick={() => handleButtonClick(`${pokemon.name}`)} variant="primary">
                Purchase
              </Button>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
