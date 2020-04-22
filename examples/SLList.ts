import SLList from "../src/SLList";

const list = new SLList();
console.log("---push---");
list.push("a");
list.push("b");
list.push("c");
list.push("d");
list.push("e");

list.add("1");
list.log();

console.log("---pop---");
list.pop();
list.pop();

list.log();
