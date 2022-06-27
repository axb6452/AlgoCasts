// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // var arr = ['a', 'e', 'i', 'o', 'u'];

    // var counter = 0;
    // for (var i=0; i < str.length; i++) {
    //     if (arr.indexOf(str[i].toLowerCase()) != -1) {
    //         counter++;
    //     }
    // }
    // return counter;
    var matches = str.match(/[aeiou]/gi);
    return matches? matches.length : 0;
}

module.exports = vowels;
