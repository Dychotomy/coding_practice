const characterArrayFromString = (input) => {
    const charArray = input.split('')
    return charArray
}

const getAnagram = (input) => {
    const chars = characterArrayFromString(input)
    const dictionary = ['document', 'gin', 'race', 'car']

    const foundAnagram = []
    dictionary.forEach((word) => {
        const wordChars = characterArrayFromString(word)
        let foundWord = false
        for (let i = 0; i < wordChars.length; i++) {
            if (!chars.includes(wordChars[i])) {
                break
            }
            if (i === (wordChars.length - 1)) {
                foundWord = true
            }
        }
        if (foundWord) {
            foundAnagram.push(word)
        }
    })
    return foundAnagram
}

module.exports = { characterArrayFromString, getAnagram }