var myName = new String("My name is equal to ") + "Carrington"
console.log(myName)
var newName = new String();

var myAge = 2334555666777
console.log(myAge)

var myTime = new Date()
console.log(myTime.getDay())
console.log(myTime.getMonth())
console.log(myTime.getFullYear())
console.log(myTime.getDate())

for( let i = 0; i < myName.length; i++ ){
    // console.log( myName.charAt(i) )
    // console.log( typeof(myName.charAt(i)) )
    newName += ( myName.charAt(i) + myName.charAt(i))
}

console.log(newName)