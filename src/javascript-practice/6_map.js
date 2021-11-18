const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomology', metals: 4},
];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);


console.log(instructor_names);


// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

//const instructorInfo = `${instructors.map(i => ${i.name}: )}`

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