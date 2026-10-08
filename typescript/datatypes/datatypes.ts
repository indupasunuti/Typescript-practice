// ANY DATATYPE
let value:any="indu"
console.log(value.toUpperCase())

function sum(a:any,b:any){
    console.log(a+b)
}
sum("indu","suma")
sum(10,20)



// UNKNOWN
let data:unknown="unknown"
if(typeof data=='string'){
    console.log(data.toUpperCase());
}

// VOID
function chandhu():void{
    console.log("nothingg...")
}
chandhu()

// NEVER
function bank(accountnumber:string){
    throw new Error("dabba user")
}
bank("dfgwegcbinif")

