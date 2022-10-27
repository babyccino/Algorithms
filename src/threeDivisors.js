const isThree = n => {
	let ret = false;
	for (let i = 2; i <= n/2; ++i) {
		if (!(n % i)) {
			if (ret) return false;
			ret = true;
		}
	}
	return ret;
};

console.log(isThree(3));
