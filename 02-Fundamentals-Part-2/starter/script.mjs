/* Write your code below. Good luck! 🙂 */
'use strict';
/**
 * Calculates the tip based on the bill amount.
 * @param {number} bill - The bill amount.
 * @returns {number} The calculated tip.
 */
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

/**
 * An array of bill amounts.
 * @type {number[]}
 */
const bills = [125, 555, 44];

/**
 * An array of calculated tips for each bill.
 * @type {number[]}
 */
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

/**
 * An array of total amounts (bill + tip) for each bill.
 * @type {number[]}
 */
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

/**
 * An array of total amounts (bill + tip) for each bill, calculated using the map method.
 * @type {number[]}
 */
const totals2 = bills.map(
    (bill, index) => bill + tips[index]
);

console.log(tips, totals, totals2);

import { expect } from 'chai';

describe('calcTip', () => {
  it('calculates 15% tip for bills between 50 and 300', () => {
    expect(calcTip(100)).to.equal(15);
  });

  it('calculates 20% tip for bills less than 50', () => {
    expect(calcTip(40)).to.equal(8);
  });

  it('calculates 20% tip for bills greater than 300', () => {
    expect(calcTip(400)).to.equal(80);
  });
});

describe('bills, tips, and totals arrays', () => {
  it('calculates tips correctly for each bill', () => {
    expect(tips).to.deep.equal([18.75, 111, 8.8]);
  });

  it('calculates totals correctly for each bill', () => {
    expect(totals).to.deep.equal([143.75, 666, 52.8]);
  });

  it('calculates totals2 correctly using map method', () => {
    expect(totals2).to.deep.equal([143.75, 666, 52.8]);
  });
});