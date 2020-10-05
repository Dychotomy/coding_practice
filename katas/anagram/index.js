import dict from "./dict.js"

export const characterArrayFromString = (input) => {
    const charArray = input.split('')
    return charArray
}

export const getAnagram = (input) => {
    const chars = characterArrayFromString(input)
    const dictionary = ['document', 'gin', 'race', 'car']
    // const dictionary = dict

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
        }
    })
    return foundAnagram
}

// export default { characterArrayFromString, getAnagram }