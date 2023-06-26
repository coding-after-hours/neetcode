export default function isPalindrome(s: string): boolean {
	if (!s.length) {
		return false
	}
	const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	s = s
		.split('')
		.filter((char) => chars.includes(char))
		.join('')

	for (let i = 0; i < s.length; i++) {
		//@ts-ignore
		if (s.at(i).toLowerCase() !== s.at(s.length - 1 - i).toLowerCase()) {
			return false
		}
	}
	return true
}
