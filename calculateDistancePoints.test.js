const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('mammoth', () => {
        it('case mammoth', () => {
            const actual = calculateDistancePoints (227.5, 'mammoth', 200);
            const expected = 153;

            assert.equal(actual, expected);
        });
    });

    describe('normal', () => {
        it('case normal', () => {
            const actual = calculateDistancePoints (111, 'normal', 98);
            const expected = 86;

            assert.equal(actual, expected);
        })
    });

    describe('large', () => {
        it('case large', () => {
            const actual = calculateDistancePoints (134, 'large', 120);
            const expected = 85.2;

            assert.equal(actual, expected);
        })
    })
})
    