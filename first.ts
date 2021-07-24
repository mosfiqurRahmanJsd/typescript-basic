let age: number; 
age = 50; 


let club: string = 'Real Madrid'; 

const isFamous: boolean = false; 

let famous: boolean; 


function add (num1: any, num2: number | string){
    return num1 + num2; 
}

add(3, 76); 
add('Adam', 'Sand'); 
add(3, 'Someone'); 


function doubleItAndConsole(num: number): void {
    const result = num * 2; 
    console.log(result); 
}

const output = doubleItAndConsole(10); 
console.log('output', output); 



function fullName (firstName: string, lastName: string): string {
    return firstName + ' ' + lastName; 
}

const user: string = fullName('Mosfiqur', 'Rahman'); 


let multiply2: (x:number, y: number) => number; 
multiply2 = (x, y) => x * y; 




const multiply = (x: number, y: number): number => x * y; 
console.log(multiply(25, 10)); 


const numbers: number[] = [2, 3, 4, 8, 12, 91, 34]; 
numbers.push(22); 



const friends: string[] = ['George', 'Jeff', 'Bill', 'Abdul']; 
let megaName: string = ''; 
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if(friend.length > megaName.length) {
        megaName = friend; 
    }
}
console.log('Friend with the largest name', megaName);





let player: {
    club: string,
    salary: number
}

player = {
    club: 'Real Madrid', 
    salary: 450000
}





// object
const friend: {name: string, age: number} = {
    name: 'Samuel David', 
    age: 61
}
friend.age = 57; 
