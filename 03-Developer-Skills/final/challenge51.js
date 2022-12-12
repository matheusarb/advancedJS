const forecastedMaxTemp = [];

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  if (arr.length === 3) {
    console.log(
      `${arr[0]}°C in 1 day, ${arr[1]}°C in 2 days, ${arr[2]}°C in 3 days`
    );
  } else if (arr.length === 5) {
    console.log(
      `${arr[0]}°C in 1 day, ${arr[1]}°C in 2 days, ${arr[2]}°C in 3 days, ${arr[3]}°C in 4 days, ${arr[4]}°C in 5 days`
    );
  }
};

console.log(printForecast(arr2));
