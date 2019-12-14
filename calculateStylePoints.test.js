const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', () => {
    it('correct style points', () => {
        const actual = calculateStylePoints([18, 17.5, 18, 17.5, 17]);
        const expected = 53;

        assert.equal(actual, expected)
    });
});