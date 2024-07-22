const num1 = +prompt('Digite um número')
const num2 = +prompt ('digite um segundo número')
const num3 = +prompt ('digite um terceiro número')


let soma = num1 + num2;

if (soma < num3) {
    alert(`${num1} + ${num2} não é menor que ${num3}`) ;
} else {
    alert(`${num1} + ${num2} = ${num1 + num2} não é menor que ${num3}`);
} 

 