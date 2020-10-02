const assert = require('chai').assert
const characterArrayFromString = require('./index.js').characterArrayFromString
// import assert from 'assert'

describe('converts a string to array of characters', function () {
    it('return an array', function () {
        const result = characterArrayFromString('documenting')
        assert.typeOf(result, 'array')
        // result == ['d', 'o', 'c' ...]
    })
    it('returns an array of characters', function () {

    })
})