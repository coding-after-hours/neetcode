var groupAnagrams = function (strs) {
	const anagramContainerObject = {}
	strs.forEach((str) => {
		const normalizedStr = str.split('').sort().join('')
		if (anagramContainerObject.hasOwnProperty(normalizedStr)) {
			anagramContainerObject[normalizedStr].push(str)
		} else {
			anagramContainerObject[normalizedStr] = [str]
		}
	})
	return Object.values(anagramContainerObject)
}
