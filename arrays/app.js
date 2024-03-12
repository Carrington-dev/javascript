const numbers = [ 1, 3, 5, 6, 7, 8, 9]

let newNumbers = numbers.map(num => `num ${num}`)
numbers.map(num => numbers.push(`num ${num}`))

console.log(newNumbers)
console.log(numbers)