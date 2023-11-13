/*
Filename: complexCode.js
Content: Complex Code Example
*/

// Sample function to compute the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Sample function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Sample class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    return new ComplexNumber(
      this.real + other.real,
      this.imaginary + other.imaginary
    );
  }

  multiply(other) {
    const real =
      this.real * other.real - this.imaginary * other.imaginary;
    const imaginary =
      this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Sample data structure - Binary Tree node
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Sample function to find the height of a binary tree
function getHeight(node) {
  if (node === null) {
    return 0;
  } else {
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Sample function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// ... More code here (over 200 lines)
// Note: The code above is just a small example, the actual code should be much longer and more elaborate.