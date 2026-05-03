// Vowel Counter
const countVowels = (str) => {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("Umar")); // 2
