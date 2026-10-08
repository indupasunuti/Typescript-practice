interface Car{
    brand:string
    price:number
    readonly color:string
}

let car1:Car={
    brand:"kia",
    price:100000,
    color:"white"
}
console.log(car1);


let car2:Car={
    brand:"BMW",
    price:5000000,
    color:"gray"
}
console.log(car2);
console.log("-----------------------------------");



// EXAMPLE 2
interface nonveg{
    starters:string
    price:number
}
interface nonveg{
    biryani:string
    quantity:number
}

let person:nonveg={
    starters:"lolipop",
    price:259,
    biryani:"fried piece biryani",
    quantity:4
}
console.log(person);
