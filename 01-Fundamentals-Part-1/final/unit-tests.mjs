import { expect } from 'chai';
import sinon from 'sinon';

/**
 * A no-op global `prompt` function to avoid errors in the Node.js environment.
 */
global.prompt = () => {};

/**
 * Prompts the user to enter their name and returns the result.
 * @returns {string|null} The name entered by the user, an empty string, or null if the prompt is cancelled.
 */
function getName() {
    return prompt('Enter your name: ');
}

describe('getName', () => {
    /**
     * Restores Sinon stubs after each test to ensure a clean state.
     */
    afterEach(() => {
        sinon.restore();
    });

    /**
     * Test case: Checks if `getName` returns the name entered by the user.
     */
    it('returns the name entered by the user', () => {
        const promptStub = sinon.stub(global, 'prompt').returns('John Doe');
        const result = getName();
        expect(result).to.equal('John Doe');
    });

    /**
     * Test case: Checks if `getName` returns an empty string when the user enters nothing.
     */
    it('returns an empty string if the user enters nothing', () => {
        const promptStub = sinon.stub(global, 'prompt').returns('');
        const result = getName();
        expect(result).to.equal('');
    });

    /**
     * Test case: Checks if `getName` returns null when the user cancels the prompt.
     */
    it('returns null if the user cancels the prompt', () => {
        const promptStub = sinon.stub(global, 'prompt').returns(null);
        const result = getName();
        expect(result).to.be.null;
    });
});

