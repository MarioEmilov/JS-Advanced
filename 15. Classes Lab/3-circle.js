class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(value) {
        if (value <= 0) {
            throw new Error('Diameter must be positive')
        }
        this.radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

/*
class Circle {

    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(diameter) {
        this._radius = diameter / 2;
    }

    get area() {
        return Math.PI * this._radius ** 2
    }
}
*/