// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// Inheritance: Dog IS-A Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }

    // Override parent method
    eat() {
        console.log(`${this.name} is eating dog food`);
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.eat();   // Buddy is eating dog food
dog.sleep(); // Buddy is sleeping (inherited)
dog.bark();  // Buddy is barking
