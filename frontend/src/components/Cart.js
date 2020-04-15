import React, { useEffect, useReducer } from 'react';
import '../styles/Cart.scss';

const initialState = {
  currentAmount: 0,
  saved: true
};

// add items to cart
// subtract item from cart
// delete item from cart
function updateCartReducer(initialState, [id, quantity]) {
  const currentAmountElement = document.querySelector('.counter');
  let currentAmountValue = parseInt(currentAmountElement.value);
  currentAmountValue += quantity;
  return { ...initialState, currentAmount: currentAmountValue, saved: false };
}

function Cart(props) {
  const [state, dispatch] = useReducer(updateCartReducer, initialState);

  const addItem = id => dispatch([id, 1]);
  const subtractItem = id => dispatch([id, -1]);
  const removeItem = id => dispatch([id, null]);

  // Mount
  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch('http://localhost:5000/cards/');
        let items = await response.json();

        // getCart(items);
      } catch (err) {
        console.warn('fetchCart -> err', err);
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
    }
    // const updateCart = async () => {
    //   setSaved(false);
    //   fetch(`/cart/`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(cartItems)
    //   })
    //     .then(() => {
    //       setSaved(true);
    //     })
    //     .catch(error => {
    //       setSaved(false);
    //     });
    // };
    // updateCart();
  }, [state.saved]);

  return (
    <div className="add-to-cart-section">
      <div className="counter-section">
        <button onClick={() => subtractItem(props.currentCardId, -1)} className="minus-button">
          -
        </button>
        <input className="counter" type="text" value={state.currentAmount} readOnly />
        <button onClick={() => addItem(props.currentCardId, 1)} className="plus-button">
          +
        </button>
      </div>
      <button onClick={() => addItem(props.currentCardId, 1)} className="add-to-cart-button">
        Add to cart
      </button>
    </div>
  );
}

export default Cart;
