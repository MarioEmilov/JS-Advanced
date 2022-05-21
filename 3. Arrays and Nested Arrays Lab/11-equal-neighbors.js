function equalNeighbos1(arr) {
    let count = 0;
    arr.forEach((x) =>
        x.reduce((a, v) => {
            if (a === v) {
                count += 1;
            }
            return v;
        })
    );


    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].forEach((_, j) => {
            if (arr[i][j] === arr[i + 1][j]) {
                count += 1;
            }
        });
    }
    return count;
}

console.log(equalNeighbos1([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))
console.log(equalNeighbos1([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]))
console.log(equalNeighbos1([['2', '2', '5' ,'7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', 2]]))

    function equalNeighbors2(matrix){
        let counter = 0;
        for (let i = 0; i < matrix.length; i++){
        // check if equal neighbors in row
            let row = matrix[i];
            let neighborOnRow;
            for (let entry of row){
                if (entry == neighborOnRow){
                    counter++;
                }
                neighborOnRow = entry;
            }
    
        // check if equal neighbors in column
            let col = [];
            let neighborOnCol;
            for (let j = 0; j < matrix.length; j++){
                col.push(matrix[j][i]);
                if (matrix[j][i] == neighborOnCol){
                    counter++;
                }
                neighborOnCol = matrix[j][i];
            }
        }
        console.log(counter);
    }
    equalNeighbors2([
        ['2', '3', '4', '7', '7'],
        ['4', '0', '5', '7', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '5']])