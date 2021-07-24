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
    var friend_1 = friends[i];
    if (friend_1.length > megaName.length) {
        megaName = friend_1;
    }
}
console.log('Friend with the largest name', megaName);
var player;
player = {
    club: 'Real Madrid',
    salary: 450000
};
// object
var friend = {
    name: 'Samuel David',
    age: 61
};
friend.age = 57;
var messy = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4500000,
    wife: 'Some name',
    isPlaying: true
};
var ronaldo = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 5100000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
var poorPlayer = { salary: 10000, age: 50 };
getBonus(messy, ['shuvo']);
var Person = /** @class */ (function () {
    function Person(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    Person.prototype.getName = function () {
        return this.name + '' + this._partner;
    };
    return Person;
}());
var sam = new Person('Samuel', 'Devid');
console.log('name', sam.name, sam.fatherName);
var samName = sam.getName();
sam.name = 'Ben';
