import dict from "./dict.js"

export const characterArrayFromString = (input) => {
    const charArray = input.split('')
    return charArray
}

export const getAnagram = (input) => {
    const dictionary = ['document', 'comet', 'gin', 'race', 'ace', 'car']
    let chars = characterArrayFromString(input)

    const foundAnagram = []
    dictionary.forEach((word) => {
        const wordChars = characterArrayFromString(word)
        let foundWord = true
        for (let i = 0; i < wordChars.length; i++) {
            if (!chars.includes(wordChars[i])) {
                foundWord = false
            }
        }
        if (foundWord) {
            foundAnagram.push(word)
            chars = updateRemainingCharacters(chars, word)
        }
    })
    return foundAnagram
}

export const updateRemainingCharacters = (chars, foundWord) => {
    const wordChars = foundWord.split('')
    let remainingArray = chars
    wordChars.forEach((c) => {
        for (let i = 0; i < chars.length; i++) {
            if (c === chars[i]) {
                remainingArray.splice(i, 1)
                break
            }
        }
    })
    return remainingArray
}
