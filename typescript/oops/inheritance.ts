let horse={
    eat(){
        console.log("horse can eat");
    },

sleep(){
    console.log("horese can eat");
    
}
}

let lion ={
    eat(){
        console.log("lion can eat");
    },
    sleep(){
        console.log("lion can sleep");
        
    }
}

let car:{
    model:string
    color:string
    engine:string
    material:string
    price:number
    start():void
}={
    model:"tata",
    color:"gray",
    engine:"2000cc",
    material:"glass,palstic,fibre",
    price:20000000,
    start():void{
        console.log("car has started");   
    },
}

let car2=Object.create(car)
console.log(car2);
car2.color='white'
console.log(car2.color);
car2.fuel='petrol'
console.log(car2.fuel);
console.log(car2.model);
car2.start()
car.start()




