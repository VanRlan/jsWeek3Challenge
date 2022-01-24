// Easy
function exercise(activity) {
    return "Today's exercise is " + activity;
}
var run = exercise("Running");
console.log(run);
var swim = exercise("Swimming");
console.log(swim);

// Medium
function cutPizzaSlices(slices, people) {
    return `Each person gets ${slices / people} slices of pizza`;
  }
  console.log(cutPizzaSlices(8, 2));
  console.log(cutPizzaSlices(8, 3));

// Hard
var ppi = {
    firstName: 'Van',
    lastName: 'Rlan',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
    sSN: function() {
        const ssn = 123456789
        return ssn
    }
};
console.log(ppi.fullName());
console.log(ppi.sSN());

// Very Hard
class Pokemon {
    constructor (name, type) {
        this.name = name;
        this.type = type;
        this.isHungry = true;
    }

    sayName () {
        console.log(`${this.name}`);
        console.log(`${this.name} has a type of ${this.type}`);
        this.isHungry = true;
    }

    eat() {
        if(this.isHungry){
            this.isHungry = false;
            console.log(`${this.name} ate its food and is not hungry any more`);
        } else {
            console.log(`${this.name} is not hungry`);
        }
    }
}

const pikachu = new Pokemon("Pikachu", "Electric");

Pokemon.prototype.attack = "Thunderbolt"

pikachu.sayName();
pikachu.eat();
console.log(pikachu.attack);