import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  // Please add test cases here
  test("divide all numbers by 2", () => {
    const numbers = [10, 100, 42, 30, 988]
    const expected = [5, 50, 21, 15, 494]
    const actual = halfNumbers(numbers)
    expect(expected).toStrictEqual(actual)
  })
  test("splice names", () => {
    const names = ["angge", "jens", "kenneth", "king", "ron"]
    const expected = ["Hello angge", "Hello jens", "Hello kenneth", "Hello king", "Hello ron"]
    const actual = spliceNames(names)
    expect(expected).toStrictEqual(actual)
  })
  test("add serial number", () => {
    const fruits = ["apple", "banana", "orange", "mango"]
    const expected = ["1. apple", "2. banana", "3. orange", "4. mango"]
    const actual = addSerialNumber(fruits)
    expect(expected).toStrictEqual(actual)
  })
});
