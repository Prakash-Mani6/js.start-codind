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
