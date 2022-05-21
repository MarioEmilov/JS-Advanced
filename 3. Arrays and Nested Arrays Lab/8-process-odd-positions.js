function processOddPositions(arr) {
    let sorted = [];
    for (let i = 1; i <= arr.length; i+=2){
        sorted.push(arr[i])
    }
    let result = sorted.reverse().map(a => a * 2);
    return result;
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));

function oddPositions(arr){
    return arr.filter((_,i)=> i%2 !==0)
    .map((x)=>x*2)
    .reverse()
}

console.log(oddPositions([10, 15, 20, 25]));