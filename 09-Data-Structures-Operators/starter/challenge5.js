'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  console.log(rows);

  for (const row in rows) {
  }
});

//transformar a letra após o underscore em maiúscula
//juntar a letra transformada

// const camelCaseTransformer = function (input) {
//   let str = input + '';
//   const afterUnderscore = str.indexOf('_') + 1;
//   str = str.toLowerCase().trim();

//   str = console.log(str);
// };

// camelCaseTransformer('hello_Moto');

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
