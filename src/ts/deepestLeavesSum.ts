import { TreeNode } from "./binaryTree"

export function deepestLeavesSum(root: TreeNode | null): number {
	if (!root) return 0

	let maxHeight = 0
	let sum = 0
	function traverse(node: TreeNode, height: number): void {
		if (node.left || node.right) {
			if (node.left) traverse(node.left, height + 1)
			if (node.right) traverse(node.right, height + 1)

			return
		}

		if (height > maxHeight) {
			maxHeight = height
			sum = node.val
		} else if (height === maxHeight) {
			sum += node.val
		}
	}
	traverse(root, 0)

	return sum
}

// functional solution to above

function dfs(
	node: TreeNode | null,
	height: number
): { maxHeight: number; sum: number } {
	if (!node) return { maxHeight: height - 1, sum: 0 }

	if (node.left || node.right) {
		const left = dfs(node.left, height + 1)
		const right = dfs(node.right, height + 1)

		return {
			maxHeight: Math.max(left.maxHeight, right.maxHeight),
			sum:
				(left.maxHeight >= right.maxHeight ? left.sum : 0) +
				(right.maxHeight >= left.maxHeight ? right.sum : 0),
		}
	}

	return { maxHeight: height, sum: node.val }
}

export function deepestLeavesSumFunc(root: TreeNode | null): number {
	if (!root) return 0
	return dfs(root, 0).sum
}
