function cooking (num, opr1, opr2, opr3, opr4,opr5){
    let result = Number(num);
    let commands = [opr1, opr2, opr3, opr4, opr5];
     
    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'chop':  result /= 2; break;
            case 'dice': result = Math.sqrt(result); break;
            case 'spice': result += 1; break;
            case 'bake': result *= 3; break;
            case 'fillet': result *= 0.80; break;
        }
     
        if (commands[i] === 'fillet'){
            
            console.log(result.toFixed(1));
        }else{
     
            console.log(result);
        }
    }
}