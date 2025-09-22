class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Subclass: Square, forces width and height equal
class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    setWidth(width) {
        this.width = width;
        this.height = width; // Maintain square property
    }

    setHeight(height) {
        this.height = height;
        this.width = height; // Maintain square property
    }
}

function resizeRectangle(rectangle, newWidth, newHeight) {
    rectangle.setWidth(newWidth);
    rectangle.setHeight(newHeight);
    console.log(`Expected area: ${newWidth * newHeight}, Actual area: ${rectangle.getArea()}`);
}

const rect = new Rectangle(2, 3);
resizeRectangle(rect, 4, 5); // Works as expected

const square = new Square(4);
resizeRectangle(square, 4, 5); // Violates LSP: Expected area: 20, Actual area: 25