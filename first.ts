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