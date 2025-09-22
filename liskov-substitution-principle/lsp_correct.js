class Shape {
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }

    area() {
        return this.size * this.size;
    }
}

function printArea(shape) {
    console.log(`Area: ${shape.area()}`);
}

const rect = new Rectangle(4, 5);
printArea(rect); // Area: 20

const square = new Square(4);
printArea(square); // Area: 16