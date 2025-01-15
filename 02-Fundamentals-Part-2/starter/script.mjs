'use strict';

/* Write your code below. Good luck! 🙂 */

/**
 * Calculates the average of three scores.
 * @param {number} score1 - The first score.
 * @param {number} score2 - The second score.
 * @param {number} score3 - The third score.
 * @returns {number} The average of the three scores.
 */
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

/**
 * Determines the winner based on the average scores of two teams.
 * @param {number} avgDolphins - The average score of the Dolphins team.
 * @param {number} avgKoalas - The average score of the Koalas team.
 */
const checkWinner = (avgDolphins, avgKoalas) => {
    const winner = (avgKoalas >= 2 * avgDolphins) ?
        `Koalas win (${avgKoalas} vs. ${avgDolphins})` :
        (avgDolphins >= 2 * avgKoalas) ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})` : `No team wins...`;

    console.log(winner);
}

checkWinner(scoreDolphins, scoreKoalas);

import { expect } from 'chai';
import sinon from 'sinon';

describe('calcAverage', () => {
    it('calculates the average of three scores', () => {
        const result = calcAverage(10, 20, 30);
        expect(result).to.equal(20);
    });

    it('calculates the average when all scores are the same', () => {
        const result = calcAverage(10, 10, 10);
        expect(result).to.equal(10);
    });

    it('calculates the average when scores are zero', () => {
        const result = calcAverage(0, 0, 0);
        expect(result).to.equal(0);
    });
});

describe('checkWinner', () => {
    it('declares Koalas as winners when their score is at least double the Dolphins\' score', () => {
        const consoleSpy = sinon.spy(console, 'log');
        checkWinner(50, 100);
        expect(consoleSpy.calledWith('Koalas win (100 vs. 50)')).to.be.true;
        consoleSpy.restore();
    });

    it('declares Dolphins as winners when their score is at least double the Koalas\' score', () => {
        const consoleSpy = sinon.spy(console, 'log');
        checkWinner(100, 50);
        expect(consoleSpy.calledWith('Dolphins win (100 vs. 50)')).to.be.true;
        consoleSpy.restore();
    });

    it('declares no winner when neither team has double the score of the other', () => {
        const consoleSpy = sinon.spy(console, 'log');
        checkWinner(50, 50);
        expect(consoleSpy.calledWith('No team wins...')).to.be.true;
        consoleSpy.restore();
    });
});