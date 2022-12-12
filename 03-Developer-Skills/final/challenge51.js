//MY SOLUTION
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
const printForecast = arr => {
  let dayNum = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 3) {
      console.log(
        `...${arr[0]}°C in ${dayNum} day, ${arr[1]}°C in ${dayNum + 1} days, ${
          arr[2]
        }°C in ${dayNum + 2} days...`
      );
    } else if (arr.length === 5) {
      console.log(
        `...${arr[0]}°C in ${dayNum} day, ${arr[1]}°C in ${dayNum + 1} days, ${
          arr[2]
        }°C in ${dayNum + 2} days, ${arr[3]}°C in ${dayNum + 3} days, ${
          arr[4]
        }°C in ${dayNum + 4} days...`
      );
    }
  }

  return arr;
};

console.log(printForecast(data1));
console.log(printForecast(data2));

//MY SECOND TRY
let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

//INSTRUCTOR SOLUTION
