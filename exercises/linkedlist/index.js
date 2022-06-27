// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // var n = new Node(data);
        // n.next = this.head;
        // this.head = n;
        this.head = new Node(data, this.head);
    }

    size() {
        var n = this.head;
        var i = 0;
        while (n != null) {
            n = n.next;
            i++;
        }
        return i;
    }

    getFirst() {
        // return this.head;
        return this.getAt(0);
    }

    getLast() {
        var n = this.head;
        // var i = 0;
        // while (i < this.size() - 1) {
        //     n = n.next;  
        //     i++;          
        // }
        // return n;
        // while (n) {
        //     if (n.next == null) {
        //         return n;
        //     } else {
        //         n = n.next;
        //     }
        // }  
        return this.getAt(this.size() - 1);      
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        var n = this.head;
        if (n != null) {
            this.head = n.next;
            n = null;
        }
    }

    removeLast() {
        if (this.head == null) {
            return;
        }

        if (this.size() == 1) {
            this.head = null;
            return;
        }

        var previous = this.head;
        var node = this.head.next;

        if (node == null) {
            previous = null;
            return;
        }

        while (node.next != null) {           
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        var n = this.getLast();
        if (n) {
            n.next = new Node(data, null);        
        } else {
            this.insertFirst(data);
        }
    }

    getAt(index) {
        var n = this.head;
        // if (!n) {
        //     return null;
        // }

        var i = 0;
        while (n) {           
            if (i == index) {
                return n;
            } else {
                n = n.next;
                i++;
            }
        }
        return null;
    }

    removeAt(index) {
        // var c = this.getAt(index);
        // var p = this.getAt(index - 1);
        // var n = this.getAt(index + 1);

        // if (!c) {
        //     return;
        // }
        // if (!p && !n) {
        //     c = null;
        //     return;
        // }

        // if (p && n) {
        //     p.next = n;
        //     return;
        // }

        // if (p && !n) {
        //     p.next = null;
        //     return
        // }

        // if (!p && n) {
        //     this.head = n;
        //     return;
        // }
        if (!this.head) {
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
        }
        var p = this.getAt(index - 1);
        if (!p || !p.next) {
            return;
        }
        p.next = p.next.next;
        return p;
    }

    insertAt(data, index) {
        // if (!this.head) {
        //     var node = new Node(data, null);
        //     this.head = node;
        //     return;
        // }

        // if (index <= 0 || index > this.size()) {
        //     if (index <= 0) {
        //         var n = new Node(data, this.head);
        //         this.head = n;
        //         return;
        //     } else {
        //         var l = this.getLast();
        //         l.next = new Node(data, null);
        //         return;
        //     }
        // }

        // var p = this.getAt(index - 1);
        // var n = this.getAt(index + 1);

        // var c = new Node(data, p.next);
        // p.next = c;

        // if (p && !n) {
        //     p.next = new Node(data, null);
        //     return;
        // }
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data,this.head);
            return;
        }

        var p = this.getAt(index - 1) || this.getLast();
        var c = new Node(data, p.next); 
        p.next = c;

        return;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}



module.exports = { Node, LinkedList };
