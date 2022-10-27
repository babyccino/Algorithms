// utility functions for binary tree leetcode problems

export interface TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
}

export function printTree(head: TreeNode | null): string {
	if (!head) return ""

	const nodeArrayArray: (number | null)[][] = []
	let queue: (TreeNode | null)[] = [head]
	let queue2: (TreeNode | null)[] = []
	while (queue.length && queue.some((el) => el !== null)) {
		const arr: (number | null)[] = []
		while (queue.length) {
			const node = queue.shift()
			if (!node) {
				arr.push(null)
				queue2.push(null, null)
				continue
			}
			arr.push(node.val)
			queue2.push(node.left, node.right)
		}
		nodeArrayArray.push(arr)
		queue = queue2.slice()
		queue2 = []
	}

	const stringArr: string[] = []
	let spacing = 0
	let pow = 0
	for (let i = nodeArrayArray.length - 1; i >= 0; --i) {
		let str = "" + " " //.repeat(spacing)
		spacing += Math.pow(2, pow++)

		for (const el of nodeArrayArray[i]) str += (el === null ? " " : el) + " " //.repeat(spacing)

		stringArr.push(str)
	}
	return stringArr.reverse().join("\n")
}

export const createTreeNode = (
	val: number,
	left: TreeNode | null = null,
	right: TreeNode | null = null
) => ({
	val,
	left,
	right,
})

export function arrayToBinaryTree(arr: (number | null)[]): TreeNode | null {
	if (arr.length < 1) return null

	const head = createTreeNode(arr[0] as number)
	const queue: (TreeNode | null)[] = [head]
	let start = 1
	let end = 1
	for (let level = 1; start < arr.length; ++level) {
		end += Math.pow(2, level)
		for (; start < end && start < arr.length; start += 2) {
			const node = queue.shift()
			if (!node) {
				queue.push(null, null)
				continue
			}
			node.left = arr[start] ? createTreeNode(arr[start] as number) : null
			node.right = arr[start + 1]
				? createTreeNode(arr[start + 1] as number)
				: null
			queue.push(node.left, node.right)
		}
	}
	return head
}
