'use strict';

/**
 * Calculates the tip based on the bill amount.
 * @param {number} bill - The bill amount.
 * @returns {number} The calculated tip.
 */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

/**
 * An array of bill amounts.
 * @type {number[]}
 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/**
 * An array to store calculated tips for each bill.
 * @type {number[]}
 */
const tips = [];

/**
 * An array to store total amounts (bill + tip) for each bill.
 * @type {number[]}
 */
const totals = [];

/**
 * Loop through each bill, calculate the tip and total amount, and store them in the respective arrays.
 */
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

import assert from 'assert';

describe('calcTip', () => {
    it('calculates 15% tip for bills between 50 and 300', () => {
        assert.strictEqual(calcTip(100), 15);
    });

    it('calculates 20% tip for bills less than 50', () => {
        assert.strictEqual(calcTip(40), 8);
    });

    it('calculates 20% tip for bills greater than 300', () => {
        assert.strictEqual(calcTip(400), 80);
    });

    it('calculates 20% tip for bill exactly 50', () => {
        assert.strictEqual(calcTip(50), 7.5);
    });

    it('calculates 15% tip for bill exactly 300', () => {
        assert.strictEqual(calcTip(300), 45);
    });
});

describe('bills, tips, and totals arrays', () => {
    it('calculates tips correctly for each bill', () => {
        assert.deepStrictEqual(tips, [4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]);
    });

    it('calculates totals correctly for each bill', () => {
        assert.deepStrictEqual(totals, [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]);
    });

    it('handles empty bills array', () => {
        const emptyBills = [];
        const emptyTips = [];
        const emptyTotals = [];
        assert.deepStrictEqual(emptyTips, []);
        assert.deepStrictEqual(emptyTotals, []);
    });
});