// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     var r = n;
//     var c = n + (n - 1);
//     var mid = Math.floor(((2 * n) - 1)/ 2);
//     for (var i=0; i < r; i++) {
//         var out = ''
//         for (j = 0; j < c; j++) {
//             if (mid - i <= j && mid + i >= j) {
//                 out += '#';
//             } else {
//                 out += ' ';
//             }
//         }
//         console.log(out);
//     }
    
// }

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === (2 * n) - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor(((2 * n) - 1)/ 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;
