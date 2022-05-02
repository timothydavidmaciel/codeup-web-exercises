let myArray = [1, 2, 3, 5];

function arraySum(myArray) {
    let bucket = 0;
    for (let el of myArray){
        bucket += el;
    }
    return bucket;
}

console.log(arraySum());