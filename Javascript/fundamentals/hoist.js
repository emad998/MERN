// // 1
// var hello;
// console.log(hello);
// hello = 'world';                                 
// // ans is undefined


// 2
// var needle;
// needle = 'haystack';
// test();
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// // ans is magnet


// 3
// var brendan;
// brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// // ans is 'super cool'

// 4
// var food;
// food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// // ans is:
// // chicken
// // half-chicken



// 5
// var mean;
// mean();
// console.log(food);
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// ans is mean is not a function



// 6
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// // // ans is:
// // undefined
// // rock
// // r&b
// // disco


// // 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// // ans:
// // san jose
// // seattle
// // burbank
// // san jose



// 8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// ans is:
// error at line 114 because dojo is a const and not immutable.