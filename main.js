/* 
👉 Write your kata here!
*/


// test("given an array of numbers, remove all double's and reverse the list e:g")
// [1,1,2,2,3,3,4,4]

//👉 Write the function your CodeWarriors will start with below here:




 function removeAndReverse(array){
  let newArray = [...new Set(array)]
  let returned = newArray.sort((a,b)=>b-a)
  return returned
}

module.exports = removeAndReverse