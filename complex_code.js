// filename: complex_code.js

// A complex code for an e-commerce website that handles product listings, shopping carts,
// and payment processing

// Define class for a Product
class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  // Method to calculate the discounted price
  calculateDiscount(discountPercentage) {
    return this.price - (this.price * (discountPercentage / 100));
  }
}

// Define class for a Shopping Cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add a product to the cart
  addProduct(product) {
    this.items.push(product);
  }

  // Method to remove a product from the cart
  removeProduct(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
  }

  // Method to calculate the total price of the cart
  calculateTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // Method to apply a discount to the cart
  applyDiscount(discountPercentage) {
    this.items.forEach((item) => {
      item.price = item.calculateDiscount(discountPercentage);
    });
  }
}

// Define class for Payment Gateway
class PaymentGateway {
  processPayment(totalAmount) {
    // Code to process the payment
    console.log(`Processing payment for amount: $${totalAmount}`);
    console.log('Payment successful!');
  }
}

// Create an instance of ShoppingCart
const myCart = new ShoppingCart();

// Create some sample products
const product1 = new Product(1, 'Product 1', 20, 'Description 1');
const product2 = new Product(2, 'Product 2', 30, 'Description 2');
const product3 = new Product(3, 'Product 3', 40, 'Description 3');

// Add products to the cart
myCart.addProduct(product1);
myCart.addProduct(product2);
myCart.addProduct(product3);

// Apply a discount to the cart
myCart.applyDiscount(10);

// Calculate the total price of the cart
const totalPrice = myCart.calculateTotalPrice();
console.log(`Total price: $${totalPrice}`);

// Create an instance of PaymentGateway
const paymentGateway = new PaymentGateway();

// Process the payment
paymentGateway.processPayment(totalPrice);

// Output:
// Total price: $81
// Processing payment for amount: $81
// Payment successful!