"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We explicitly import what we need from the mathUtils module.
const mathsUtils_1 = require("./mathsUtils");
const sum = (0, mathsUtils_1.add)(5, 3);
const difference = (0, mathsUtils_1.subtract)(10, 4);
console.log(sum);
console.log(difference);
