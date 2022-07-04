// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {    
                var lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        var currentIndex = i;
        var indexOfMin = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (currentIndex != indexOfMin) {
            var temp = arr[indexOfMin];
            arr[indexOfMin] = arr[currentIndex];
            arr[currentIndex] = temp;
        }
        
    }
    return arr;
}

function mergeSort(arr) {

    if (arr.length == 1) {
        return arr;
    }

    var center = Math.floor(arr.length / 2);

    var left = arr.slice(0, center);
    var right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    var results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
