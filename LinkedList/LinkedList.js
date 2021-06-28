import Node from "./Node.js";

class LinkedList {
    constructor(first = null, last = null) {
        this.first = first;
        this.last = last;
    }

    addFirst(value) {
        let node = new Node(value);

        if (this.isEmpty()){
            this.first = this.last = node;
        } else {
            node.next = this.first;            
            this.first = node;            
        }
    }

    addLast(value) {
        let node = new Node(value);

        if (this.isEmpty()){
          this.first = this.last = node;
        } else {
            this.last.next = node;            
            this.last = node;            
        }
    }

    getPrevious(node) {
        let current = this.first;

        while (current) {
            if (current.next == node) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    isEmpty() {
        return this.first === null;
    }

    reverse() {
        // Logic to reverse a linked list
        //    10     ->      20     ->    30
        //  previous       current       next
        if (this.isEmpty()) return;

        let previous = this.first;
        let current = this.first.next;

        while (current !== null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.last = this.first;
        this.last.next = null;
        this.first = previous;
    }

    getKthFromTheEnd(k) {
        if (this.isEmpty()) return;

        let f = this.first;
        let s = this.first;
        let distance = k - 1;
        let i = 0;

        // [10 -> 20 -> 30 -> 40 -> 50]
        //              f            s

        while (s.next) {
            if (i == distance) {
            while (s.next) {
                f = f.next;
                s = s.next;
            }
            break;
            }
            s = s.next;
            i++;
        }

        return f.value;
    }

    getMiddle() {
        // [10 -> 20 -> 30 -> 40 -> 50]
        //         f          s
        // f move 1 step while s move 2 steps

        if (this.isEmpty()) return;

        let f = this.first;
        let s = this.first;
        
        while (s != this.last && s.next != this.last) {
            s = s.next.next;
            f = f.next;
        }

        if (s == this.last) {
            return f.value;
        } else {
            return [f.value, f.next.value];
        }
    }

    removeFirst() {
        if(this.first == this.last){
            this.first = this.last = null;
            return;
        }

        let second = this.first.next;
        this.first.next = null;
        this.first = second;
    }

    removeLast() {
        let previous = this.getPrevious(this.last);
        this.last = previous;
        previous.next = null;
    }

    contains(value) {
        return this.indexOf(value) != -1;
    }

    indexOf(value) {
        let index = 0;
        let found = -1;
        let current = this.first;

        while (current) {
            if (current.value === value) {
                found = index;
            }
            index++;
            current = current.next;
        }

        return found;
    }

    toArray() {
        let items = [];
        let current = this.first;

        while (current) {
            items.push({
                value: current.value,
                next: current.next ? current.next.value : null,
            });
            current = current.next;
        }
        return items;
    }
}
export default LinkedList;