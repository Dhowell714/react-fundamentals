// we name the class
class User {
    // we call the constructor function and create parameters. These will be values that we want to be passed in and stored in the object
    constructor(first, last, e) {
        // on the right side of the below expressions, the word 'first', 'last', and 'e' are the values that are getting passed in as the arguments when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
        // on the left side, we have the actual keys of the object being created. The left side stores the incoming arguments from the newly created object as value for 'this' specific object being created.
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Conner
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "poconner@elevenfifty.org"}