class PaymentStrategy {
    pay(amount) {
        throw new Error('This method should be overridden!');
    }
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }

    processPayment(amount) {
        this.strategy.pay(amount);
    }
}

// Usage
const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();

const processor1 = new PaymentProcessor(creditCardPayment);
processor1.processPayment(100);

const processor2 = new PaymentProcessor(paypalPayment);
processor2.processPayment(50);