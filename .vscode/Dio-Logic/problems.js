//PROBLEMA 1 - Calcule o valor a ser pago em 2 camisas com um desconto de 20%
const cam1 = 50;
const cam2 = 50;

const compraTotal = (item1, item2) => {
  let desconto = (item1 + item2) * 0.2;
  let result = item1 + item2 - desconto;
  return `R$ ${result},00 reais`;
};

console.log(compraTotal(cam1, cam2));

//PROBLEMA 2 - Calcule a média aritmética de 4 notas

const mediaArit = (nota1, nota2, nota3, nota4) => {
  let result = (nota1 + nota2 + nota3 + nota4) / 4;
  return result;
};

console.log(mediaArit(5, 7, 10, 3));
