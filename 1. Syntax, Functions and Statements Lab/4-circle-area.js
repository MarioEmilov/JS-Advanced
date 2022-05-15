function solve(input) {
    let result;
    let inputType = typeof(input);

    if (inputType != 'number') {
        result = 'We can not calculate the circle area, because we receive a ' + inputType + '.';
    } else {
        result = ((input ** 2) * Math.PI).toFixed(2);
    }

    console.log(result);
}

solve(5);
solve('name');