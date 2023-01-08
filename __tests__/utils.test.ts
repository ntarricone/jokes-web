import { getRandomIndex } from '../utils'

it('should return a number in example array out with excluded values', () => {
  expect(
    getRandomIndex({
      array: [1, 2, 3, 4, 5, 6, 7, 8],
      excludedValues: [5, 6, 7, 8],
    })
  ).toBeLessThan(5)
})
