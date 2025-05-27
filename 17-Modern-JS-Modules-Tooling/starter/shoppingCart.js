// Exporting Module
console.log('Exporting Module');
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product}  added to cart.`);
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalQuantity as tq, totalPrice};

export default {
    'cart': cart,
    'shippingCost': shippingCost,
    'totalPrice': totalPrice,
    'totalQuantity': totalQuantity,
    add(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product}  added to cart.`);
    }
}
