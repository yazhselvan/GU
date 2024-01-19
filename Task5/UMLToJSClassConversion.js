class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
    
   getCircumference(){
       return (2 * Math.PI * this.radius).toFixed(2); 
   }
}

const circle = new Circle(2, 'blue');
const area = circle.getArea();
const circum = circle.getCircumference();
console.log(`Area is ${area} sq units and circumference is ${circum} units`);
