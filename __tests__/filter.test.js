import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter.js';
describe('array filter test', () => {
    // Please add test cases here
    test("filter even numbers", () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const expected = [2, 4, 6, 8, 10]
        const actual = filterEvenNumbers(numbers)
        expect(expected).toStrictEqual(actual)
    })
    test("filter word length with 4", () => {
        const words = ['one', 'two', 'three', 'four', 'asdw']
        const expected = ['four', 'asdw']
        const actual = filterLengthWith4(words)
        expect(expected).toStrictEqual(actual)
    })
    test("filter words that start with a", () => {
        const words = ['ant', 'baseball', 'avocado', 'zebra']
        const expected = ['ant', 'avocado']
        const actual = filterStartWithA(words)
        expect(expected).toStrictEqual(actual)
    })
});