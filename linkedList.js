// utility functions for linked list questions

const createNode = (val, next) => {
	let node = {
		val,
		next
	};

	node.print = () => {
		let str = val.toString();
		let nextNode = node;
		while(nextNode.next) {
			nextNode = nextNode.next;
			str += "->" + nextNode.val;
		}
		return str;
	}

	return node;
};

const arrayToLinkedList = arr => {
	const ret = createNode(arr[0], null);
	if (arr.length === 1) return ret;

	let last = ret;
	for (let i = 1; i < arr.length; ++i) {
		last.next = createNode(arr[i], null);
		last = last.next;
	}
	return ret;
};

module.exports = {
	createNode,
	arrayToLinkedList
};
