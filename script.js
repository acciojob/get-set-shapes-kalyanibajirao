class Rectangle {
            constructor(width, height) {
                this._width = width;
                this._height = height;
            }

            get width() {
                return this._width;
            }

            get height() {
                return this._height;
            }

            getArea() {
                return this._width * this._height;
            }
        }

        class Square extends Rectangle {
            constructor(side) {
                super(side, side);
            }

            getPerimeter() {
                return 4 * this._width; // or 4 * this._height since both are equal
            }
        }

        // Attach classes to the window object
        window.Rectangle = Rectangle;
        window.Square = Square;