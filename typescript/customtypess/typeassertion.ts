let fruit:unknown="apple"
let a=fruit as string
console.log(a.length);


// TYPE ASSERTION WITH OBJECT
let student:unknown={
    roll:101,
    branch:"cse"
}
let data=student as{
    roll:number
    branch:string
}
console.log(data);


