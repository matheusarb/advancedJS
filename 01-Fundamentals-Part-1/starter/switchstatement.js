let day = "";
day = "thursday";

switch (day) {
  case "monday":
    console.log("shit");
    break;
  case "tuesday":
    console.log("tercinha");
    break;
  case "wednesday":
  case "thursday":
    console.log("já é fds");
    break;
  case "friday":
    console.log("sextou");
    break;
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("shit");
} else if (day === "tuesday");

const sairHj = false;

const destino = !sairHj === true ? "partiu" : "fica doidao";
console.log(destino);

console.log(
  `vai fazer oq hoje? ${!sairHj === true ? "vou sair" : "vou ficar em casa"}`
);
