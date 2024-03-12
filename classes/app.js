const count = {
    carrington: 28,
    chalmers: 24,
    portia: 26,
    cornwell: 20,
    rendani: 15,
    ndivhu: 11,
    max(){
        return this.carrington;
    }
    ,
    myThis(){
        console.log(this)
    }
}

console.log(`My object is ${count}`, count)
console.log("____________________________________________________")
console.log(`My max is ${count.max}`, count.max)
console.log("____________________________________________________")
console.log(`My max is  ${count.max()}`, count.max())
console.log("____________________________________________________")
count.myThis()