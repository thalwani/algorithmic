import Queue from './Queue.js';

let queue = new Queue();
queue.add(10);
queue.add(20);
queue.add(30);

queue.reverse();

console.log(queue);