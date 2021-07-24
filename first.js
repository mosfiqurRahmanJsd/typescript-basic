var age;
age = 50;
var club = 'Real Madrid';
var isFamous = false;
var famous;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 76);
add('Adam', 'Sand');
add(3, 'Someone');
function doubleItAndConsole(num) {
    var result = num * 2;
    console.log(result);
}
var output = doubleItAndConsole(10);
console.log('output', output);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var user = fullName('Mosfiqur', 'Rahman');
var multiply2;
multiply2 = function (x, y) { return x * y; };
var multiply = function (x, y) { return x * y; };
console.log(multiply(25, 10));
var numbers = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);
var friends = ['George', 'Jeff', 'Bill', 'Abdul'];
var megaName = '';
for (var i = 0; i < friends.length; i++) {
    var friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name', megaName);
