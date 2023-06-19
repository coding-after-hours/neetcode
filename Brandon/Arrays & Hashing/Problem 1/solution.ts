function containsDuplicate(nums: number[]): boolean {
	const intChecker = {}
	for (let i = 0; i < nums.length; i++) {
		if (intChecker.hasOwnProperty(nums[i])) {
			return true
		} else {
			intChecker[nums[i]] = true
		}
	}
	return false
}
