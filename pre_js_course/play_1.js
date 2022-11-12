/* let name = "Manuel";
let age = "29";
let hasHoobies = true; */



const summerizeUser = (userName, userAge, userHobby) => {
    return (
    "name is: " + 
    userName + 
    ", age is: " + 
    userAge + 
    " and the user has Hobbies: " + 
    userHobby
    );
}
const add = (a,b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

/* console.log(addOne(3));
console.log(summerizeUser(name,age,hasHoobies));
console.log(addRandom()); */

const person = {
    name: 'Manuel',
    age: 29,
    hasHobbies: true,
    greet(){
        console.log('Hi, im ' + this.name);
    }
}

/* const printName = ({name}) => {
    console.log(name);
} */

printName(person);

const {name, age} = person; 
console.log(name, age);

/* const copiedPeerson = {...person};
console.log(copiedPeerson); */

/* const hobbies = ['Sports', 'Cooking', 'Bestemmiare']; 
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); */

/* for(let hobby of hobbies){
    console.log(hobby);
} */
/* console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
})); */

//hobbies.push('Programming');
/* const copiedArray = [...hobbies];

console.log(copiedArray);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4, 'manuel'));
 */
