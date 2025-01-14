function calcuiateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
}
function showResult(bill, tip) {
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
}

const bill = 104;

/* Write your code below. Good luck! 🙂 */
const tip = calcuiateTip(bill);
showResult(bill, tip);

import { expect } from 'chai';
import sinon from 'sinon';

describe('calcuiateTip', () => {
    it('returns 15% tip for bills between 50 and 300', () => {
        const result = calcuiateTip(100);
        expect(result).to.equal(15);
    });

    it('returns 20% tip for bills less than 50', () => {
        const result = calcuiateTip(40);
        expect(result).to.equal(8);
    });

    it('returns 20% tip for bills greater than 300', () => {
        const result = calcuiateTip(400);
        expect(result).to.equal(80);
    });
});

describe('showResult', () => {
    it('logs the correct message', () => {
        const consoleSpy = sinon.spy(console, 'log');
        showResult(100, 15);
        expect(consoleSpy.calledWith('The bill was 100, the tip was 15, and the total value 115')).to.be.true;
        consoleSpy.restore();
    });
});