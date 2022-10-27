// utility functions for linked list questions

interface ListNode {
	val: number
	next: ListNode | null
}

export function printList(node: ListNode): string {
	let str = node.val.toString()
	let nextNode = node
	while (nextNode.next) {
		nextNode = nextNode.next
		str += "->" + nextNode.val
	}
	return str
}

export const createNode = (val: number, next: ListNode | null): ListNode => ({
	val,
	next,
})

export function arrayToLinkedList(arr: number[]): ListNode {
	const ret = createNode(arr[0], null)
	if (arr.length === 1) return ret

	let last: ListNode = ret
	for (let i = 1; i < arr.length; ++i) {
		last.next = createNode(arr[i], null)
		last = last.next
	}
	return ret
}
