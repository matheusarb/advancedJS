// const userName = "Mahtu";

// console.log(userName);

const cam1 = 50;
const cam2 = 50;

//desconto de 20% na compra das duas

const compraTotal = (item1, item2) => {
  let desconto = (item1 + item2) * 0.2;
  let result = item1 + item2 - desconto;
  return result;
};

console.log(compraTotal(cam1, cam2));
