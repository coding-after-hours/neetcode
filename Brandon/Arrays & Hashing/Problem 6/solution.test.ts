import { assert, test } from 'vitest'
import productExceptSelf from './solution'
test('Actual Test', () => {
	assert.deepEqual(productExceptSelf([0]), [0])
	assert.deepEqual(productExceptSelf([0, 1]), [1, 0])
	assert.deepEqual(productExceptSelf([0, 2]), [2, 0])
})
