// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // var newString = str.split('');
    // newString = newString.reverse();
    // newString = newString.join('');
    // return newString;

    // var newString = str.substr(str.length - 1,);
    // return newString;

    // var newstring = [];
    // for (var i = str.length - 1; i >= 0; i--) {
    //     newstring.push(str[i]);
    // }
    // return newstring.join("");

    // let reversed = '';

    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    // return str.split("").reduce((reversed, character) => {
    //     return character + reversed;
    // }, "");
    debugger
    return str.split("").reduce((rev,char) => char + rev, "");
}

reverse('asdf')

module.exports = reverse;
