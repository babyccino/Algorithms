// utility functions for binary tree leetcode problems

const createTreeNode = (val, left, right) => {
	const head = {
		val,
		left: left ? left : null,
		right: right ? right : null,
	}

	head.print = () => {
		let nodeArrayArray = [];
		let queue = [head], queue2 = [];
		while (queue.length && queue.some(el => el !== null)) {
			let arr = [];
			while(queue.length) {
				const node = queue.shift();
				if (!node) {
					arr.push(null);
					queue2.push(null, null);
					continue;
				};
				arr.push(node.val);
				queue2.push(node.left, node.right);
			}
			nodeArrayArray.push(arr);
			queue = queue2.slice();
			queue2 = [];
		}
		let spacing = 0;
		let pow = 0;
		for (let i = nodeArrayArray.length - 1; i >= 0; --i) {
			let str = "" + " ".repeat(spacing);
			spacing += Math.pow(2, pow++);

			for (const el of nodeArrayArray[i])
				str += (el === null ? ' ' : el) + ' '.repeat(spacing);

			nodeArrayArray[i] = str;
		}
		return nodeArrayArray.join('\n');
	}

	return head;
}

const arrayToBinaryTree = arr => {
	const head = createTreeNode(arr[0]);
	let queue = [head];
	let start = 1, end = 1;
	for (let level = 1; start < arr.length;++level) {
		end += Math.pow(2,level);
		for (; start < end && start < arr.length; start += 2) {
			const node = queue.shift();
			if (!node) {
				queue.push(null, null);
				continue;
			}
			node.left = arr[start] ? createTreeNode(arr[start]) : null;
			node.right = arr[start + 1] ? createTreeNode(arr[start + 1]) : null;
			queue.push(node.left, node.right);
		}
	}
	return head;
};

const tree = arrayToBinaryTree([0,null,1,null,null,null,1]);
console.log(tree.print());

module.exports = {
	createTreeNode,
	arrayToBinaryTree
};