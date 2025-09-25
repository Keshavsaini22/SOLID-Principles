// Behavior objects
const canEat = {
    eat() {
        console.log(`${this.name} is eating`);
    }
};

const canSleep = {
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
};

const canBark = {
    bark() {
        console.log(`${this.name} is barking`);
    }
};

const canSwim = {
    swim() {
        console.log(`${this.name} is swimming`);
    }
};

// Factory function using composition
function createDog(name, breed) {
    const dog = { name, breed };
    return Object.assign(dog, canEat, canSleep, canBark);
}

function createFish(name, species) {
    const fish = { name, species };
    return Object.assign(fish, canEat, canSwim);
}

const dog = createDog('Buddy', 'Golden Retriever');
dog.eat();   // Buddy is eating
dog.bark();  // Buddy is barking

const fish = createFish('Nemo', 'Clownfish');
fish.eat();  // Nemo is eating
fish.swim(); // Nemo is swimming
