import { BinarySearchTree, Node } from "./../src/BinarySearchTree";

const binarySearchTree = new BinarySearchTree<number>();

binarySearchTree.add(7);

binarySearchTree.add(3);
binarySearchTree.add(12);

binarySearchTree.add(1);
binarySearchTree.add(5);
binarySearchTree.add(9);
binarySearchTree.add(13);

binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);
binarySearchTree.add(14);

console.dir(binarySearchTree, { depth: 10 });

binarySearchTree.remove(12);

console.dir(binarySearchTree, { depth: 10 });
