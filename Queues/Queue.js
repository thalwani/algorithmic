class Queue{
    constructor() {
        this.queue = [];
    }

    add(int) {
        this.queue.push(int);
    }

    reverse() {
        if (!this.queue.length) return;

        let reversed = [];
        for (let i = this.queue.length - 1; i >= 0; i--){
            reversed.push(this.queue[i]);
        }

        this.queue = reversed;
    }
}

export default Queue;