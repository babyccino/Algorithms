const { arrayToLinkedList } = require('./linkedList');

const mergeTwoListsIter = (list1, list2) => {
	if (!list1) return list2;
	if (!list2)	return list1;
	if (!list1 && !list2) return null;

	let ret;
	if (list1.val < list2.val) {
		ret = list1;
		list1 = list1.next;
	} else {
		ret = list2;
		list2 = list2.next;
	}

	let retNode = ret;
	while(true) {
		if (list1 && list2) {
			if (list1.val <= list2.val) {
				retNode.next = list1;
				list1 = list1.next;
			} else if (list2.val < list1.val) {
				retNode.next = list2;
				list2 = list2.next;
			}
		} else if (list1) {
			retNode.next = list1;
			list1 = list1.next;
		} else if (list2) {
			retNode.next = list2;
			list2 = list2.next;
		} else break;
		retNode = retNode.next;
	}

	return ret;
};

// recursive approach (much simpler)
const mergeTwoLists = (list1, list2) => {
	if (!list1) return list2;
	if (!list2)	return list1;
	if (!list1 && !list2) return null;

	if (!list2 || list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
};

// next leetcode question is about sorting a linked list.
// since we just implemented the merging, we can easily use this to implement mergesort for a linked list

const sortList = head => {
  if (!head || !head.next) return head;
  
  let beforeMiddle, middle = head, end = head;
  while(end && end.next) {
    beforeMiddle = middle;
    middle = middle.next;
    end = end.next.next;
  }
  
  // disconnect the list at middle, i.e. the node before the middle is no longer connected to middle
  beforeMiddle.next = null;

  return mergeTwoLists(sortList(head), sortList(middle));
};

const head = [-1,5,3,4,0];

const sorted = sortList(arrayToLinkedList(head));
console.log(sorted.print());