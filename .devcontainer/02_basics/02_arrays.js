let Bikes = ["hero","Honda","Bajaj",]
//console.log(Bikes);

let Friends = ["Prakash", "Mahi", "Divyanshu","Dubey"]

    // concat Method

let combind = Bikes.concat(Friends)   // =>add two elements of array<= || => here are only add one value<=
console.log(combind);

    //sprad 

const all_bikes_friends = [...Bikes, ...Friends]   // =>this dot(...) method is same method of concat<=
console.log(all_bikes_friends);                     //=> there is no limitestion<=


const aaray = [1,3,2,4,[3,2,4,3],8,6,[5,6,5,3,[5,3,3,7,5]]]
const one_array = aaray.flat(Infinity)       // => bassicaly show in one depth <=
console.log(one_array);                 // output =>[1,3,2,4..........] => one defth

console.log(Array.isArray("prakash"));
console.log(Array.from("prakash"));           //=> convert to array <=
console.log(Array.from({name: "prakash"}));    // tagda Quistions     


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));