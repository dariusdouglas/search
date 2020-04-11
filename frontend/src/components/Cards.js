import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Cards.css';
import { useAsync } from 'react-async';

// class Cards extends Component {
//     render(){
//         return(
//           <div className="cards-grid">
//             <Card 
//                 style={{ width: '20rem' }}
//             >
//             <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             </Card>
//           </div>
//         )
//     }
// }

const loadCards = async () =>
  await fetch("http://localhost:5000/cards/")
  // await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    
    function Cards() {
      const { data, error, isLoading } = useAsync({ promiseFn: loadCards }) //hooks
      if (isLoading) return "Loading..."
      if (error) return `Something went wrong: ${error.message}`
      if (data)
      // The rendered component
      return (
        <div className="cards-grid">
            <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          {data.map(pokemon=> (
              <div className="pokemon">
                <p>{pokemon.name}</p>
                <p>{pokemon.type}</p>
              </div>
          ))}
        </div>
      );
    }


export default Cards;