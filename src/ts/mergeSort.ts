function mergeArrays(arrL: number[], arrR: number[]): number[] {
	if (arrL.length === 0) return arrR
	if (arrR.length === 0) return arrL

	if (arrL[0] < arrR[0]) return [arrL[0], ...mergeArrays(arrL.slice(1), arrR)]
	else return [arrR[0], ...mergeArrays(arrL, arrR.slice(1))]
}

export default function mergeSort(arr: number[]) {
	if (arr.length <= 1) return arr
	const middle = Math.floor(arr.length / 2)
	const arrL = mergeSort(arr.slice(0, middle))
	const arrR = mergeSort(arr.slice(middle))
	return mergeArrays(arrL, arrR)
}
