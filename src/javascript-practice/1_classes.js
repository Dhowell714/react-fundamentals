// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

//class Baki {
//    constructor(name) {
//        this.name = name;
//        this.Fstyle = 'Fstyle';
//    };
//    greet() {
//        console.log()
//    }
//}

class TrialUser extends User {
    trialEnding(){
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

// Instance of User class
let anonDude = new User('Anoymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// we name the class
//class User {
//    // we call the constructor function and create parameters. These will be //values that we want to be passed in and stored in the object
//    constructor(first, last, e) {
//        // on the right side of the below expressions, the word 'first', //'last', and 'e' are the values that are getting passed in as the arguments when the object is created
//        this.f = first;
//        this.l = last;
//        this.email = e;
        // on the left side, we have the actual keys of the object being created. The left side stores the incoming arguments from the newly created object as value for 'this' specific object being created.
//    }
//}

//

// super
class BronzeLevelUser extends User {
    // we add the ccinfo property to the user here
    constructor(username, password, ccinfo) {
        // if you are going to use 'this' in your constructor, you must have super that points to the parent constructor
        super(username, password);
        // the 'this' keyword wouldn't work without super
        this.type = 'Bronze User',
        this.ccinfo = ccinfo
    }

    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);

const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomology', metals: 4},
];

let instructor_names = [];

for(let i =0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names);

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

//instructors.forEach(instructor => {
//    instructor_names.push(instructor.name);
//});

//console.log(instructor_names);

// Exact same thing, different parameter name
//const instructorNamesTwo = instructors.map(i => i.name);
//console.log(instructorNamesTwo);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});