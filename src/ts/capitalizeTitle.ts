export const capitalizeTitle = (title: string): string =>
	title
		.split(" ")
		.map((word) => {
			if (word.length <= 2) return word.toLowerCase()

			return word[0].toUpperCase() + word.substring(1).toLowerCase()
		})
		.join(" ")
