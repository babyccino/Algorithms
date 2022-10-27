import { isBalanced } from "./src/balancedBinaryTree"
import { arrayToBinaryTree, printTree } from "./src/binaryTree"

const tree = arrayToBinaryTree([1, 2, 2])
console.log(printTree(tree))
console.log("is balanced:", isBalanced(tree))
