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
/*
import Shipping from './shoppingCart.js';
// Importing module
console.log('Importing Module');

console.log(Shipping);
Shipping.add('apple', 4);
Shipping.add('pizza', 2);
Shipping.add('bread', 5);
console.log(Shipping.cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {title: data.at(-1), text: data.at(-1).body};
}

const lastPost = getLastPost();
console.log(lastPost);
//lastPost.then(data => console.log(data));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart.`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from suplier.`);
    };

    // Return to public
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('bread', 5);
ShoppingCart2.addToCart('apple', 4);
console.log(ShoppingCart2);