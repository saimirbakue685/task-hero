/* 
   Filename: sophisticated_code.js
   
   Description: This code demonstrates a complex algorithm to calculate the Fibonacci series and generate a list 
   of prime numbers within a given range. The code includes various utility functions and follows best practices 
   in JavaScript programming.
*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate the Fibonacci series up to a given limit
function fibonacciSeries(limit) {
  let fibSeries = [0, 1];
  while (fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2] <= limit) {
    fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
  }
  return fibSeries;
}

// Function to generate a list of prime numbers within a given range
function generatePrimeNumbers(start, end) {
  let primes = [];
  
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Utility function to display an array as a formatted string
function displayArray(arr) {
  let str = "[ ";
  arr.forEach((item, index) => {
    str += item;
    if (index !== arr.length - 1) {
      str += ", ";
    }
  });
  str += " ]";
  console.log(str);
}

// Example usage
console.log("Fibonacci series up to 100:");
let fibSeries = fibonacciSeries(100);
displayArray(fibSeries);

console.log("Prime numbers between 50 and 100:");
let primes = generatePrimeNumbers(50, 100);
displayArray(primes);

console.log("Done!");