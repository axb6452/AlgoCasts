// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;

//     var strArray = str.split(" ");
//     for (var i=0; i < strArray.length; i++) {
//         var capitalized = strArray[i][0].toUpperCase()
//         strArray[i] = capitalized + strArray[i].slice(1);
//     }
//    return strArray.join(" ");
    
//     var strArray = str.split(" ");
//     for (var i=0; i < strArray.length; i++) {
//         var capitalized = strArray[i][0].toUpperCase()
//         strArray[i] = capitalized + strArray[i].substr(1);
//     }
//    return strArray.join(" ");
}

module.exports = capitalize;
