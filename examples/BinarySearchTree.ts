import { BinarySearchTree, Node } from "./../src/BinarySearchTree";

const binarySearchTree = new BinarySearchTree<number>();

binarySearchTree.add(3);
binarySearchTree.add(4);
binarySearchTree.add(1);
binarySearchTree.add(7);
binarySearchTree.add(5);

console.dir(binarySearchTree, { depth: 10 });
