import React, { useState, useEffect, useReducer, useRef } from 'react';

// add items to cart
// subtract item from cart
// delete item from cart
function updateCartReducer(state, [id, quantity]) {
  console.log(state);
  console.log('after current');
}

function Cart() {
  const [cartItems, getCart] = useState([{}]);
  const [cartItems2, updateCart] = useReducer(updateCartReducer, cartItems);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch('http://localhost:5000/cards/');
        let items = await response.json();
        console.log('fetchCart -> items', items);

        getCart(items);
        console.log(cartItems);
      } catch (err) {
        console.warn('fetchCart -> err', err);
        return;
      }
    }

    fetchCart();
  }, []);

  return (
    <div>
      <p>Cart</p>
    </div>
  );
}

export default Cart;
