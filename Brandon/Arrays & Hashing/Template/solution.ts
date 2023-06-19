export default function topKFrequent(nums: number[], k: number): number[] {
	// Filter for only unique values
	const uniqueNums = nums.filter(getOnlyUniqueValues)
	// If length === k, then those are the k-frequent values
	if (uniqueNums.length === k) {
		return uniqueNums
	}

	// Grab all values that appear more than once
	const dupes = nums.filter(getOnlyDuplicateValues)

	// If length > k, we keep filtering out values until we hit an array of length k.
	/**Example -> k == 2
   * [1,1,1,2,2,2,3,3,4] All values show up at least once
   * [1,1,2,2,3] All values show up at least twice
   * [1,2] All values show up at least three times
 
   * return [1,2] because length === k 
   */
	if (dupes.length >= k) {
		return topKFrequent(dupes, k)
	}

	return dupes
}
//Helper function, returns an array of unique values
function getOnlyUniqueValues(value, index, array) {
	return array.indexOf(value) === index
}
//Helper function, returns an array of duplicate values
function getOnlyDuplicateValues(value, index, array) {
	return array.indexOf(value) !== index
}
