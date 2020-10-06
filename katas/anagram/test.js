import chai from 'chai'
import { characterArrayFromString, getAnagram, updateRemainingCharacters } from './index.js'
import dict from './dict.js'

const { assert, expect } = chai
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

describe('Word dictionary', function () {
    it('should return a dictionary of words', function () {
        expect(dict).to.be.an('array').that.is.not.empty
    })
})

describe('Returns two word that is an anagram', function () {
    it('should return the words document and gin', function () {
        const result = getAnagram('documenting')
        expect(result.length).to.be.equal(2)
        expect(result).to.include.members(['document', 'gin'])
    })
    it('should not care about word order', function () {
        const result = getAnagram('documenting')
        expect(result.length).to.be.equal(2)
        expect(result).to.include.members(['gin', 'document'])
    })
    it('should return the words race and car', function () {
        const result = getAnagram('racecar')
        expect(result.length).to.be.equal(2)
        expect(result).to.include.members(['race', 'car'])
    })
})

describe('Updates array characters from word', function () {
    it(`should remove the characters from the word 'document' leaving the letters 'i', 'n', and 'g'`, function () {
        const chars = 'documenting'.split('')
        const word = 'document'
        const result = updateRemainingCharacters(chars, word)
        expect(result).to.deep.equal(['i', 'n', 'g'])
    })
})

