"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findPrimesInRange(maxNumber) {
    const primes = [];
    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
const numberToCheck = 29;
const result = isPrime(numberToCheck);
console.log(`Is ${numberToCheck} a prime number? ${result}`);
const anotherNumber = 15;
const anotherResult = isPrime(anotherNumber);
console.log(`Is ${anotherNumber} a prime number? ${anotherResult}`);
const primeList = findPrimesInRange(100);
console.log("Prime numbers up to 100:", primeList);
// Prime numbers up to 100: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
