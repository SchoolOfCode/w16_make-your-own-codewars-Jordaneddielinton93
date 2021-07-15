//👉 Write your tests below here:
const removeAndReverse = require('./main')

test("given an array of numbers, remove all sets of numbers and order the list highest to lowest",()=>{

  let actual = removeAndReverse([1,1,2,2,3,3,4,4])
  let expected = [4,3,2,1]

  expect(actual).toStrictEqual(expected)
  
})

test("given an array of numbers, remove all sets of numbers and order the list highest to lowest",()=>{

  let actual = removeAndReverse([1,2,1,2,3,5])
  let expected = [5,3,2,1]

  expect(actual).toStrictEqual(expected)
  
})

test("given an array of numbers, remove all sets of numbers and order the list highest to lowest",()=>{

  let actual = removeAndReverse([1,4,2,1,2,3,5])
  let expected = [5,4,3,2,1]

  expect(actual).toStrictEqual(expected)
  
})

test("given an array of numbers, remove all sets of numbers and order the list highest to lowest",()=>{

  let actual = removeAndReverse([2,2,2,2,4,35,35])
  let expected = [35,4,2]

  expect(actual).toStrictEqual(expected)
  
})

test("given an array of numbers, remove all sets of numbers and order the list highest to lowest",()=>{

  let actual = removeAndReverse([1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1])
  let expected = [8,7,6,5,4,3,2,1]

  expect(actual).toStrictEqual(expected)
  
})