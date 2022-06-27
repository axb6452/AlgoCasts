// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {

    // if (!list.head) {
    //     return;
    // }

    // var slow = list.head; // list.getFirst();
    // var fast = list.head; //list.getFirst();

    // while (slow) {
    //     // if (!slow.next || !fast.next) {
    //     //     return slow;
    //     // }
    //     // if (!fast.next.next) {
    //     //     return slow;
    //     // } 
    //     // slow = slow.next;
    //     // fast = fast.next.next;          
    // }
    let slow = list.getFirst();
        let fast = list.getFirst();

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;

}

module.exports = midpoint;
