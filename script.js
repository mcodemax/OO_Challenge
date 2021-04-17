class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;

        //throw new Error('msg') add if you ned to validate your object
    };
    honk(){
        return 'Beep';
    };
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(...arguments);
        this.numWheels = 4;
    };
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(...arguments);
        this.numWheels = 2;
    };
    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
        
    }
    add(vehicle){
        if(this.vehicles.length >= this.capacity){
            return `Sorry, we're full.`;
        }
        if(!(vehicle instanceof Vehicle)){
            return `Only vehicles are allowed in here!`;
        }

        this.vehicles.push(vehicle);
        return 'Vehicle added!'
    }
    
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); 