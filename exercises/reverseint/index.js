// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // var newn = n.toString();
    // if (newn.charAt(0) == "-") {
    //     newn = newn.substr(1);
    // }
    // var nreversed = newn.split("").reverse().join("")
    // if (n.toString().charAt(0) == "-") {
    //     return parseInt("-" + nreversed);
    // }
    // return parseInt(nreversed);

    var reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
