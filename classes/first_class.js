var instanceCount = 0
class Dog{
    constructor(){
        this.legs = 4
        instanceCount += 1
        this.color = "brown"
        this.instanceNumber = `Instance number ${instanceCount}`
    }
}
// Cannot invoke a class without the key word 'new'
console.log(new Dog().color, instanceCount)
// Cannot invoke a class without the key word 'new'
console.log(new Dog().color, instanceCount)
// Cannot invoke a class without the key word 'new'
console.log(new Dog().instanceNumber, instanceCount)