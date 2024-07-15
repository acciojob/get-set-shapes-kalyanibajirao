class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    getPerimeter() {
        return 4 * this.getWidth(); // Since it's a square, all sides are equal
    }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getWidth()); // Output: 5
console.log(rectangle.getHeight()); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.getWidth()); // Output: 7
console.log(square.getHeight()); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
