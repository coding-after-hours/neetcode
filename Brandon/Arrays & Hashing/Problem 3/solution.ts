function twoSum(nums: number[], target: number): number[] {
	if (nums.length > 2) {
		let numsMap = {}
		for (let i = 0; i < nums.length; i++) {
			if (numsMap[target - nums[i]] == nums[i]) {
				return [nums.indexOf(target - nums[i]), i]
			} else {
				numsMap[nums[i]] = target - nums[i]
			}
		}
	}
	return [0, 1]
}
