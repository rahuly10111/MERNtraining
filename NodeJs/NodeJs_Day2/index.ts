let firstName: string = 'Rahul';
console.log(typeof firstName);
console.log(firstName);

const num_group = [];
num_group.push(2);
num_group.push(6);
console.log(num_group);
console.log(num_group[1]);

const car: { type: string, name: string, car_no: number } = { type: "four", car_no: 1246, name: "audi" }
console.log(car);

const cars = { type: "four", car_no: 1246, name: 'audi' }
console.log(cars);

//we can use both number and string in enum
enum directions {
    north,
    south = 14,
    east,
    west
}
console.log(directions.north);
console.log(directions.east);

// create a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const cars_Collection: Car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);


// create a new interface
interface Rectangle {
    height: number,
    width: number
};

const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);

//new interface amd extending it
interface Rectangle_Details extends Rectangle {
    color: string,
    rect_no: number
}

const rectangle_details: Rectangle_Details = {
    height: 40,
    width: 20,
    color: "blue",
    rect_no: 4
}
console.log(rectangle_details);

