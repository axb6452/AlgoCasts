// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
var cache = {}
return function(...args) {
    if (cache[args]) {
        return cache[args];
    }

    var result = fn.apply(this, args);
    cache[args] = result;

    return result;
}

}

function fib(n) {
    // var a = 0;
    // var b = 1;
    // var out = []
    // var c = a + b;
    // out.push(a);
    // out.push(b);
    // out.push(c);

   // while (i <= n) {
    //     var temp = c;
    //     c = c + b;
     //     b = temp;
    //     out.push(c);
   //     i++;
    // }

    if (n < 2) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2);
    }
    
}

fib = memoize(fib);

module.exports = fib;
