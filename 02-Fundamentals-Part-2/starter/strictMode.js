// insert in the beginning of the script;
// Stric Mode servers two purposes:
// 1. Forbides us to do certain things which are wrong;
// 2. Display visible errors in the code;
// 3. Reserve Keywords for the future;

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive!");
