// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // var ret = [];
    // var out = [];
    // for (var i=0 + 1; i < n; i++) {
    //     out.push(i);
    // }
    // ret.push(out);
    // var last = out[out.length - 1];
    // out = [];
    // for (var j = last + 1; j < last + n; j++) {
    //     out.push[j];
    //     ret.push(out);
    // }
    // out = [];
    // for (var k = last + 1; k <last + n; k++) {
    //     out.unshift[k];
    // }
    // return ret = out + ret[ret.length - 1];

    const results = [];

    for (let i=0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //Top row
        for (let i = startColumn; i <=endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        //Bottom row
        for (let i=endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //start column
        for (let i=endRow; i>=startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    
    return results;
}

module.exports = matrix;
