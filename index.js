"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var balancedBinaryTree_1 = require("./src/balancedBinaryTree");
var binaryTree_1 = require("./src/binaryTree");
var tree = (0, binaryTree_1.arrayToBinaryTree)([1, 2, 2]);
console.log((0, binaryTree_1.printTree)(tree));
console.log("is balanced:", (0, balancedBinaryTree_1.isBalanced)(tree));
//# sourceMappingURL=index.js.map