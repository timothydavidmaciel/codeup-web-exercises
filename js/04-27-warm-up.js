

function allFirstLetters(stt) {
    let bucket = "";
    for (let el of stt) {
       bucket += el.substring(0, 1)
    }
    return bucket;
}

const testXStrings = ["dog", "cat", "frog", "bat"];
console.log(allFirstLetters(testXStrings));