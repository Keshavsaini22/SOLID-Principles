class PaymentProcessor {
    process(payment) {
        if (payment.type === 'credit_card') {
            // process credit card
            console.log('Processing credit card for', payment.amount);
        } else if (payment.type === 'paypal') {
            // process PayPal
            console.log('Processing PayPal for', payment.amount);
        }
        // To add a new method, we must modify this class
    }
}

const processor = new PaymentProcessor();
processor.process({ type: 'credit_card', amount: 100 });
processor.process({ type: 'paypal', amount: 50 });
