const arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

const isPrimeNumber = (item) => {
    if (item < 2) {
        return false
    } else {
        for( let i = 2; i <= item; i++ ){
            if( item % i === 0 && item !== i){
                return false
            }
        }
        // return true;
    }
    return true;
}

const newArray = arr.filter(item => item % 3 === 0)
const newArrayTwo = arr.filter(item => isPrimeNumber(item))

console.log(newArray);
console.log(newArrayTwo);