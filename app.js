//პირველი დავალება
function calc(a, b) {
    if(a === b) {
        console.log('ტოლია');
    } else {
        console.log('არ არის ტოლი');
    }
}

// console.log(calc(2, '2'));

//მეორე დავალება

function temperature(fahrenheit) {
    let fTemp = fahrenheit;

    if(typeof fahrenheit === 'number') {
        let cTemp =(fTemp - 32) * 5 / 9;
        console.log(cTemp);
    } else if(typeof fahrenheit ==='string') {
        console.log(false);
    }

}
// temperature(60);
// temperature('60');

//მესამე დავალება 

function calculate(a, b, operation) {
    
    if(typeof a === 'string' || typeof b === 'string' || typeof operation === 'undefined') {
        console.log(false);
    } else if(operation === '+') {
        return a + b;
    } else if(operation === '-') {
        return a - b;
    } else if(operation === '*') {
        return a * b;
    } else if(operation === '/') {
        return a / b;
    }
}

// console.log(calculate(2, 3, '*'));