class Array {
    constructor(length) {
        this.length = length;
        this.items = [];
    }

    insert(item) {
        this.items.push(item)
    }

    indexOf(index) {
        return this.items.indexOf(index);
    }

    insertAt(index, item) {
        this.items[index] = item;
    }

    removeAt(index) {
        this.items.splice(index, 1);
    }

    max() {
        let max = 0;

        // O(n)
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] > max) {
                max = this.items[i];
            }
        }

        return max;
    }

    intersect(array) {
        let results = [];

        // O(n)
        //console.time("O(n)");
        for (let i = 0; i < this.items.length; i++) {
            if (array.includes(this.items[i])) {
                results.push(this.items[i]);
            }
        }
        //console.timeEnd("O(n)");

        results = [];
        // O(n^2)
        //console.time("O(n^2)");
        for (let i = 0; i < this.items.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == this.items[i]) {
                    results.push(this.items[i]);
                }
            }
        }
        //console.timeEnd("O(n^2)");

        return results;
    }

    reverse() {
        /*let reversed = [];

        for (let i = this.items.length -1; i >= 0; i--){
            reversed.push(this.items[i]);
        }

        return reversed;*/

        return this.items.reverse();
    }
}

let array = new Array(3);
array.insert(10);
array.insert(20);
array.insert(30);
array.insert(40);
array.insertAt(1, 11);
array.removeAt(300);

console.log(array);