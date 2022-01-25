// Easy
function exercise(activity) {
    return () => `Today's exercise is: ${activity}`;
}
var run = exercise("Running");
var swim = exercise("Swimming");
console.log(run());
console.log(swim());

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
class  Person{
    constructor (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`Soccer is fun! - ${this.name}`)
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

const van = new Person("Van", "back-end developer");

van.exercise();
van.fetchJob();
