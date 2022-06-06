function solve(arr) {
    let result = [];
    let r = {
        add: (arr, str) => {
            arr.push(str);
            return arr;
        },
        remove: (arr, str) => {
            let filtered = arr.filter(e => e != str);
            return filtered;
        },
        print: (arr, _) => {
            console.log(arr.join(','));
            return arr;
        },
    }

    arr.forEach(e => {
        let [command, str] = e.split(' ');
        result = r[command](result, str);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
console.log('---------------------------');
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])