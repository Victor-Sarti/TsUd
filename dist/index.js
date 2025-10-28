function userInput(input1, input2) {
    let resultado;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        resultado = input1 + input2;
    }
    else {
        resultado = input1.toString() + input2.toString();
    }
    return resultado;
}
const combinePrices = userInput(20, 20);
console.log(combinePrices);
const combineName = userInput('Apple', 'Bread');
console.log(combineName);
