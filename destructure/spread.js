var data = {
    myName: "Carrington",
    age: 123
};

var newData = {
    surname: "Muleya",
    ...data
}

console.log(newData)

const numbers = [ 23, 45, 67, 56, 78]

const newNumbers = [ 88, 56, ...numbers ]

console.log(newNumbers)