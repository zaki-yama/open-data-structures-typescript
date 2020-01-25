import DLList from "../src/DLList";

const list= new DLList<string>();
list.add(0, 'a');
list.add(0, 'b');
list.add(0, 'c');
list.add(0, 'd');
list.add(0, 'e');
list.add(0, 'f');

list.remove(2);

list.add(3, 'x');
