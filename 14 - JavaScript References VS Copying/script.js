// start with strings, numbers and booleans
let age = 30;
let age2 = age;
//console.log(age, age2); // 30 , 30

age = 35; // we gave it a new value
//console.log(age, age2); // 35 , 30


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players;
//console.log(team, players);

// You might think we can just do something like this:

//team[1] = "Morgana"; --> we changed the both array. Because they both point to the same array!
//console.log(team, players); --> ['Wes', 'Morgana', 'Ryan', 'Poppy'] ['Wes', 'Morgana', 'Ryan', 'Poppy']

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
//console.log(team2);
team2[1] = "Braum";
//console.log(team2);  --> ["Wes", "Braum", "Ryan", "Poppy"]
//console.log(players.slice()); --> ["Wes", "Sarah", "Ryan", "Poppy"]

// one way
// or create a new array and concat the old one in
const team3 = [].concat(players);
//console.log(team3); --> ["Wes", "Sarah", "Ryan", "Poppy"]

// or use the new ES6 Spread

const team4 = [...players];
//console.log(team4); --> ["Wes", "Sarah", "Ryan", "Poppy"]

const team5 = Array.from(players);
//console.log(team5); --> ["Wes", "Sarah", "Ryan", "Poppy"]
team5[2] = "Ryze";
//console.log(team5); --> ["Wes", "Sarah", "Ryze", "Poppy"]
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
name: 'Wes Bos',
age: 80
};
// and think we make a copy:

const captain = person;
captain.number = 89;
// console.log(captain); --> same array with person and includes number: 89 property
// console.log(person.number); --> 89 ,because they both are same array
// how do we take a copy instead?
const cap2 = Object.assign({}, person , {number : 99});
// console.log(person); --> 89 {name: "Wes Bos", age: 80, number: 89}
// console.log(cap2); --> cap2.number is 99  
// We will hopefully soon see the object ...spread

//const cap3 = {...person};

//console.log(cap3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const user = {
    name: "Mike",
    age: 23,
    social: {
        twitter: "@mikimiki",
        instagram: "@mikisface"
    }
}


/* 
console.log(user);
{
  name: 'Mike',
  age: 23,
  social: { twitter: '@mikimiki', instagram: '@mikisface' }
} */

const user2 = Object.assign({}, user);

user2.name = "George";
/* 
console.log(user2);
{
  name: 'George',
  age: 23,
  social: { twitter: '@mikimiki', instagram: '@mikisface' }
}
*/

user2.social.twitter = "@zero";
/* 

console.log(user2.social.twitter); //--> @zero
console.log(user.social.twitter); // --> @zero 

when we copy an object using Object.assgin() method actually we do one level deep (name, age, social).
If we want to do a clone deeply we can use lodash cloneDeep or we can use a cheating way like JSON.parse and JSON.stringfy
*/

const user3 = JSON.parse(JSON.stringify(user));
/* 
console.log(user3);
{
  name: 'Mike',
  age: 23,
  social: { twitter: '@zero', instagram: '@mikisface' }
}
 */

 user3.social.instagram = "@facetoface";
 console.log(user3.social.instagram); // @facetoface
 console.log(user.social.instagram); // @mikisface