import { assert, test } from 'vitest'
import isPalindrome from './solution'
test('Actual Test', () => {
	assert.equal(isPalindrome('a'), true)
	assert.equal(isPalindrome('as'), false)
	assert.equal(isPalindrome('kasik'), false)
	assert.equal(isPalindrome('kaya,k'), true)
	assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true)
	assert.equal(isPalindrome('0p'), false)
})
