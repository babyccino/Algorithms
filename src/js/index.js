const checkAlmostEquivalent = (word1, word2) => {
	const hash = (new Array(26)).fill(0);

	for (let i = 0; i < word1.length; ++i) {
		++hash[word1.charCodeAt(i) - 97];
		--hash[word2.charCodeAt(i) - 97];
	}

	for (count of hash) if (count > 3 || count < -3) return false;
	return true;
};

const word1 = "aaab", word2 = "bccb";
console.log(checkAlmostEquivalent(word1, word2));

