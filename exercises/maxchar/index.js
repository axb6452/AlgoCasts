// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var chars = {};
    for (var i=0; i < str.length; i++) {
        if (!chars[str[i]]) {
            chars[str[i]] = 1;
        } else {
            chars[str[i]]++;
        }
    }
    console.log(chars);
    var keys = Object.keys(chars);
    console.log(keys.length);
    var maxChar = chars[keys[0]];
    console.log(maxChar);
    var key;
    for (var i=0; i < keys.length; i++) {
        if (chars[keys[i]] > maxChar) {
            maxChar = chars[keys[i]];
            key = keys[i];
        }
    }
    return key;
}


module.exports = maxChar;
