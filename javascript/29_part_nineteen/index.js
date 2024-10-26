// JSON = (JavaScript Object Notation) data-interchange format 
//               Used for exchanging data between a server and a web application
//               JSON files {key:value} OR [value1, value2, value3]
// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object
// ---------- JSON.stringify() ----------
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

const jsonStringnames = JSON.stringify(names);
console.log(jsonStringnames);
const jsonStringperson = JSON.stringify(person);
console.log(jsonStringperson);
const jsonStringpeople = JSON.stringify(people);
console.log(jsonStringpeople);

// ---------- JSON.parse() ----------
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                                     {"name": "Patrick","age": 34,"isEmployed": false},
                                     {"name": "Squidward","age": 50,"isEmployed": true},
                                     {"name": "Sandy","age": 27,"isEmployed": false}]`;

const parsedDatajsonNames = JSON.parse(jsonNames);
console.log(parsedDatajsonNames);
const parsedDatajsonPerson = JSON.parse(jsonPerson);
console.log(parsedDatajsonPerson);
const parsedDatajsonPeople = JSON.parse(jsonPeople);
console.log(parsedDatajsonPeople);

// ---------- fetch() ----------
fetch("names.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value.name, value.age, value.isEmployed, value.hobbies))
    .catch(error => console.error(error));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name, value.age, value.isEmployed)))
    .catch(error => console.error(error));
