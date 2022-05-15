function solve(n, m) {
    let result = 0;
    
    let number1 = Number(n);
    let number2 = Number(m);

    for (let i = number1; i <= number2; i++) {
        result += i;
    }

    console.log(result);
}

solve('1', '5');
solve('-8', '20');