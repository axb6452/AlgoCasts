// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var ret = [];
    var chunk = [];

    for (i = 0; i < array.length; i++) {
        chunk.push(array[i]);
        if (i == array.length - 1 && array.length % size != 0) {
            ret.push(chunk);
            chunk = [];
        } else if (chunk.length == size) {
            ret.push(chunk);
            chunk = [];
        }
    }
    return ret;
}

module.exports = chunk;
