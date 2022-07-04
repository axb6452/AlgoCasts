// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    var temp = [];
    var counter = [];

    if (!root) {
        return
    } 
    temp.push(root);
    temp.push('s');
        
    counter.push(0);

    while (temp.length > 1) {
        var node = temp.shift();
        if (node !== 's') {
            counter[counter.length - 1]++;
            temp.push(...node.children);   
        } else {
                temp.push('s');
                counter.push(0);
        }
    }
    return counter;
}

module.exports = levelWidth;
