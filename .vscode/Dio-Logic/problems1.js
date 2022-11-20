//PROBLEMA 1 - Calcule o valor a ser pago em 2 camisas com um desconto de 20%
// const compra = (item1, item2) => {
//   let desconto = (item1 + item2) * 0.2;
//   let result = item1 + item2 - desconto;
//   return `R$ ${result},00 reais`;
// };

// console.log(compra(50, 50));

//PROBLEMA 2 - Calcule a média aritmética de 4 notas

const mediaArit = (nota1, nota2, nota3, nota4) => {
  let result = (nota1 + nota2 + nota3 + nota4) / 4;

  if (result < 7) return "Você foi reprovado. Estude mais!";

  console.log(result);
  return "Você foi aprovado. Parabéns!";
};

console.log(mediaArit(8, 8, 10, 7));

// let a = 2;
// let b = "2";

// console.log(a === b);
