const wordType = document.querySelector(".wordType")
const cursor = document.querySelector(".cursor")

// Array that contains all the text to write
const wordArray = [
    "HTML",
    "CSS",
    "JavaScript"
]
// array index, initializes to 0
let wordArrayIndex = 0
// Index of each character in the array
let charIndex = 0

const typeDelay = 200
const eraseDelay = 100
const newWordDelay = 2000

const type = () => {
    // If the initial index is lower than the character index of the array, execute these codes
    if (charIndex < wordArray[wordArrayIndex].length) {
        // Added class typing to stop the cursor clinent when writing
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
        // Add one by one the character in the array to the wordType
        wordType.textContent += wordArray[wordArrayIndex].charAt(charIndex)
        // Increment the index of the initial character up to the number of the character in the wordArray
        charIndex++
        // Add a delay for each word hit
        setTimeout(type, typeDelay);
    } else {
        // the animation must become animated when the strike is over
        cursor.classList.remove("typing")
        // After writing, launch the type() after a delay
        setTimeout(erase, newWordDelay)
    }
}
const erase = () => {
    // When the initial index is less than 0 stop the deletion
    if (charIndex > 0) {
        // Added class typing to stop the cursor clinent when deletion
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
        // delete one by one the character in the array to the wordType
        wordType.textContent = wordArray[wordArrayIndex].substring(0, charIndex - 1)
        // decrement the charIndex so that it returns to the initial value
        charIndex--
        // Add a delay for each word hit
        setTimeout(erase, eraseDelay);
    } else {
        // the animation must become animated when the strike is over
        cursor.classList.remove("typing")
        // increment the initial index of the array and if it exceeds the number of the word in array, reset it to 0
        wordArrayIndex++
        if (wordArrayIndex >= wordArray.length) wordArrayIndex = 0
        // After deleting, launch the type() after a delay
        setTimeout(type, typeDelay + 1100)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (wordArray.length) setTimeout(type, newWordDelay + 250)
})