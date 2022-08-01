// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("output", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
    
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(output(people)).toEqual([
      'Ford Prefect is a hitchhiker.',
      'Zaphod Beeblebrox is president of the galaxy.',
      'Arthur Dent is a radio employee.'
    ])
  })
})


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.


// ReferenceError: output is not defined

// Psuedocode:
// 1. Create a function that takes an array parameter
// 2. We will use a HOF and use the .map method that takes in the name and occupation
// 3. Inside the .map method, we will create a new variable called newName and set it to name.split(" ")
// 4. We will use the return statement to get back the output we are looking for
//    4a. Use string interpolation for the first item to return. We will want to get the newName[0] for the first name and add .charAt(0).toUpperCase() ...This will make the first letter in the name uppercase
//    4b. Use the plus symbol and use the newName[0].substring(1) to add the rest of the first name
// 5. Use a " " and another + symbole to seperate the first name and the last name
// 6. Use the step 4a and 4b for the last name, but instead of index newName[0], it will be index newName[1]. This will be used for the last name and for it the first letter to be uppercased
// 7. Type in: is ${occupation}.` This will finish out the output we are looking for.

// Code block below doesn't work
// const output = people.map(({name, occupation}) => {
  // return name.charAt(0).toUpperCase() + " is a " + occupation
  // name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
  // return name.charAt(0).toUpperCase() + name.slice(1)
  // return name.split()
  // return `${name.split(" ")} is a ${occupation}`
// })

// Code block below doesn't work
// const output2 = (array) => {
//   return array.map(({name, occupation}) => {
//     name.split(" ")
//     name = name.charAt(0).toUpperCase() + name.substring(1)
//     let name2 = name.split(" ")
    
//     return `${name} is a ${occupation}` + " " + name2[1].charAt(0).toUpperCase() + name2[1].substring(1)
//   })
// }

// Below function works
const output = (array) => {
    return array.map(({name, occupation}) => {
      let newName = name.split(" ")

      return `${(newName[0].charAt(0).toUpperCase() + newName[0].substring(1)) + 
        " " + (newName[1].charAt(0).toUpperCase() + newName[1].substring(1))} is ${occupation}.`


    })
}

console.log(output(people)) // Output: ['Ford Prefect is a hitchhiker.', 'Zaphod Beeblebrox is president of the galaxy.', 'Arthur Dent is a radio employee.']

// //  PASS  ./code-challenges.test.js
//   output
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("mixedData", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(mixedData(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mixedData(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//     ReferenceError: mixedData is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

// Psuedocode: 
// 1. Create a function called mixedData that takes in 1 parameter
// 2. Create a new array and set it to empty
// 3. Create a for loop to iterate through each item in the array
// 4. Use an if conditional to check if the typeof array[i] is strictly equal to a number
//    4a. If it is, then we can use the newArray.push method to insert the array[i] % 3. This will put the expected remained number we are looking for.
// 5. After exiting the for loop, return the newArray

const mixedData = (array) => {
  let newArray = []

  for(let i=0; i<array.length; i++) {
      if(typeof array[i] === "number") {
          newArray.push(array[i] % 3)
      }
  }
  return newArray
}

console.log(mixedData(hodgepodge1)) // Output: [ 2, 0, -1, 0 ]
console.log(mixedData(hodgepodge2)) // Output: [ 2, 1, -1 ]

// PASS  ./code-challenges.test.js
// mixedData
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125

  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumOfCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfCubed(cubeAndSum2)).toEqual(1125)
  })
})

//     ReferenceError: sumOfCubed is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.

// 2 = 8
// 3 = 27
// 4 = 64
// = 99

// Psuedocode:
// 1. Create a variable called sumOfCubed and it takes in 1 parameter called array
// 2. Create a sum variable and set it to equal zero
// 3. Create a for loop to iterate through each item in the array
// 4. Create logic by setting the sum to += each array[i] item and multiple array[i] by itself three times total
// 5. Exit the for loop and return the sum

const sumOfCubed = (array) => {
  let sum = 0

  for(let i=0; i<array.length; i++) {
    sum += array[i] * array[i] * array[i]
  }
  return sum
}

console.log(sumOfCubed(cubeAndSum1)) // Output: 99
console.log(sumOfCubed(cubeAndSum2)) // Output: 1125

// PASS  ./code-challenges.test.js
// sumOfCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
