import { assert, test } from 'vitest'
import topKFrequent from './solution'

test('Actual Test', () => {
	assert.deepEqual(topKFrequent([1], 1), [1])
	assert.deepEqual(topKFrequent([1, 2, 2], 2), [1, 2])
	assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2])
	assert.deepEqual(topKFrequent([3, 0, 1, 0], 1), [0])
	assert.deepEqual(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2), [-1, 2])
	assert.deepEqual(topKFrequent([5, 2, 5, 3, 5, 3, 1, 1, 3], 2), [5, 3])
	assert.deepEqual(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2), [1, 3])
})
