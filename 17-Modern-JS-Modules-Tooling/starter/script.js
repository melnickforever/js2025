// Importing module
// import {addToCart, tq, totalPrice as price} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
//
// console.log('Importing Module');
// //console.log(ShoppingCart);
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import Shipping from './shoppingCart.js';

console.log(Shipping);
Shipping.function('apple', 4);
Shipping.function('pizza', 2);
Shipping.function('bread', 5);
console.log(Shipping.cart);
