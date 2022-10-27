import { TreeNode, arrayToBinaryTree, printTree } from "./binaryTree"

function _isBalanced(root: TreeNode | null): [boolean, number] {
	if (!root) return [true, 0]

	const [leftBalanced, leftHeight] = _isBalanced(root.left)
	if (!leftBalanced) return [false, 0]

	const [rightBalanced, rightHeight] = _isBalanced(root.right)
	if (!rightBalanced) return [false, 0]

	if (Math.abs(leftHeight - rightHeight) > 1) return [false, 0]

	return [true, Math.max(leftHeight, rightHeight) + 1]
}

export const isBalanced = (root: TreeNode | null): boolean =>
	_isBalanced(root)[0]
