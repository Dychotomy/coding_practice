const assert = require('chai').assert
const expect = require('chai').expect
const characterArrayFromString = require('./index.js').characterArrayFromString
// import assert from 'assert'

describe('converts a string to array of characters', function () {
    it('return an array', function () {
        const result = characterArrayFromString('documenting')
        assert.typeOf(result, 'array')
    })
    it('returns an array of characters', function () {
        const result = characterArrayFromString('documenting')
        const expected = ['d', 'o', 'c', 'u', 'm', 'e', 'n', 't', 'i', 'n', 'g']
        expect(result).to.deep.equal(expected)
    })
})