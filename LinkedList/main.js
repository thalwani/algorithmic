import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();
linkedList.addFirst(10);
linkedList.addLast(20);
linkedList.addLast(30);
linkedList.addLast(40);
linkedList.addLast(50);
//linkedList.reverse();
//let k = linkedList.getKthFromTheEnd(1);
//let middle = linkedList.getMiddle();

console.log(linkedList.hasLoop());