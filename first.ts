let age:number = 50; 
let club:string = 'Real Madrid'; 
const isFamous: boolean = false; 


function add (num1: any, num2: number | string) {
    return num1 + num2;
}
add(3, 76); 


function fullName (firstName: string, lastName: string): string {
    return firstName + " " + lastName; 
}

const user = fullName('Ben', 'Adam'); 


function doubleItAndConsole(num:number): void {
    const result = num * 2; 
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);


let multiply2: (x: number, y: number) => number; 
multiply2 = (x, y) => x * y; 

const multiply = (x: number, y: number) : number => x * y; 

