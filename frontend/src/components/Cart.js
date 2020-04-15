import React, { useEffect, useReducer } from 'react';
import '../styles/Cart.scss';

const initialState = {
  currentAmount: 0,
  saved: true
};

// add items to cart
// subtract item from cart
// delete item from cart
function updateCartReducer(state, action) {
  console.log(action);

  switch (action.type) {
    case 'increment':
      return { currentAmount: parseInt(state.currentAmount) + 1, updateValue: 1, saved: false };
    case 'decrement':
      return { currentAmount: parseInt(state.currentAmount) - 1, updateValue: -1, saved: false };
    case 'initial':
      return { currentAmount: parseInt(action.initial), updateValue: 0, saved: true };
    default:
      throw new Error();
  }
}

function Cart(props) {
  const [state, dispatch] = useReducer(updateCartReducer, initialState);

  // Mount
  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch(`http://localhost:5000/cart/${props.currentCardId}/quantity`);
        let items = await response.json();
        console.log('fetchCart -> items', items);

        dispatch({ type: 'initial', initial: items });
      } catch (err) {
        return;
      }
    }

    fetchCart();
  }, []);

  useEffect(() => {
    if (!state.saved) {
      console.log(state.saved);
      console.log('in use effect');
      state.saved = true;
      console.log(state.saved);

      const updateCart = async () => {
        const location = window.location.hostname;
        const settings = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ cardItemId: props.currentCardId, quantity: state.updateValue })
        };
        try {
          const fetchResponse = await fetch(`http://localhost:5000/cart/`, settings);
          const data = await fetchResponse.json();
          state.saved = true;
          return data;
        } catch (e) {
          return e;
        }
      };
      updateCart();
    }
  }, [state.currentAmount]);

  return (
    <div className="add-to-cart-section">
      <div className="counter-section">
        <button onClick={() => dispatch({ type: 'decrement' })} className="minus-button">
          -
        </button>
        <input className="counter" type="text" value={state.currentAmount} readOnly />
        <button onClick={() => dispatch({ type: 'increment' })} className="plus-button">
          +
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'increment' })} className="add-to-cart-button">
        Add to cart
      </button>
    </div>
  );
}

export default Cart;
