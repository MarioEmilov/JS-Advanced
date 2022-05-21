function biggestElement1(arr) {
    return Math.max(...arr.reduce((list, element) => {
        list.push(Math.max(...element));
        return list
}, []));
};

console.log(biggestElement1([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));

    function biggestElement2(matrix) {
        let result;
        for (let row of matrix){
            let sorted = row.sort((a,b) => b - a);
            if (result < sorted[0] || result == undefined){
                result = sorted[0];
            }
        }
        return result;
    }
    console.log(biggestElement2([[3, 5, 7, 12],
                    [-1, 4, 33, 2],
                    [8, 3, 0, 4]]))