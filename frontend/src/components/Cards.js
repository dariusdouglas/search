import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Cards.css';

class Cards extends Component {
    render(){
        return(
          <div className="cards-grid">
            <Card 
                style={{ width: '20rem' }}
            >
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </div>
        )
    }
}

export default Cards;