// FUNCTION DECLARATION
// function without parameters nd without return type
function greet(){
    console.log("heloo typescript");
    
}
greet()
greet()

// function without parameters nd with return type
function demo(){
    return "typescript"
}
console.log(demo());

// functio with parameters and without return
function student(name:string,id:number){
    console.log(`enter your name: ${name}\nenter your id:${id}`); 
}
student("indu",100)
student("suma",102)

// function with parameters and return type
function mult(a:number,b:number){
    return a*b
}
console.log(mult(10,20));

// funtion with return type of array
function Arrayy():number[]{
    return [2,3,4,56,7]
}
console.log(Arrayy());

// funtion with return type of object
function data():{name:string,age:number}{
    return {name:"nidhi",age:21}
}
console.log(data());

// ANONYMOUS FUNCTION
let helo=function():void{
    console.log("induu")
}
helo()

let hiii=function():void{
    
}

