export default function productExceptSelf(nums: number[]): number[] {
	if (nums.length >= 2) {
		return nums.map((num, index1) => {
			return nums
				.filter((e, index2) => index1 != index2)
				.reduce((a, b) => a * b, 1)
		})
	}
	return [0]
}
