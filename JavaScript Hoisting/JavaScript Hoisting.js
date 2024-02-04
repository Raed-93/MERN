var hello;
hello = "world"; 
console.log(hello);

var needle = 'haystack';
test();
function test(){
    console.log(needle);
}

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
print();
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    food = 'gone';
    console.log(food);
}
var food;
var mean = function() {
     food = "chicken";
    console.log(food);
     food = "fish";
    console.log(food);
}
mean();


var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();
 var dojo = "san jose";
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();