import DLList from "../src/DLList";

const list = new DLList<string>();
list.add(0, 'a');
list.add(0, 'b');
list.add(0, 'c');
list.add(0, 'd');
list.add(0, 'e');
list.add(0, 'f');

list.remove(2);

list.add(3, 'x');


console.log('---Queue-like operation---');
const queue = new DLList<string>();
queue.addLast('a');
queue.addLast('b');
queue.addLast('c');
queue.addLast('d');
queue.addLast('e');
queue.addLast('f');

queue.removeFirst();
queue.removeFirst();


console.log('---Stack-like operation---');
const stack = new DLList<string>();
stack.addFirst('a');
stack.addFirst('b');
stack.addFirst('c');
stack.addFirst('d');
stack.addFirst('e');
stack.addFirst('f');

stack.removeFirst();
stack.removeFirst();
