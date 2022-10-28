const aChar = "a".charCodeAt(0)

export function modifyString(str: string): string {
	for (let i = 0; i < str.length; ++i) {
		if (str[i] !== "?") continue

		let newChar = aChar
		while (
			(i > 0 && newChar === str.charCodeAt(i - 1)) ||
			(i < str.length - 1 && newChar === str.charCodeAt(i + 1))
		)
			++newChar

		str =
			str.substring(0, i) +
			String.fromCharCode(newChar) +
			str.substring(i + 1, str.length)
	}

	return str
}
