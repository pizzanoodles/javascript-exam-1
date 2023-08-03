import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  // Please add test cases here
  test("find first grown up", () => {
    const ages = [7, 12, 69, 40]
    const expected = 69
    const actual = firstGrownUp(ages)
    expect(expected).toBe(actual)
  })
  test("find the first orange", () => {
    const fruits = ["apple", "banana", "orange", "pineapple"]
    const expected = "orange"
    const actual = firstOrange(fruits)
    expect(expected).toBe(actual)
  })
  test("find the first name with the length of 5 or more", () => {
    const names = ["angge", "jens", "kenneth", "king", "ron"]
    const expected = "kenneth"
    const actual = firstLengthOver5Name(names)
    expect(expected).toBe(actual)
  })
});
