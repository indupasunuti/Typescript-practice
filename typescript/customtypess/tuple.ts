let aadhar:[string,number,string]
aadhar=["chandhu",13,"female"]
console.log(aadhar[0]);
console.log("--------------------------------");


// ### EXAMPLE:2 ###
let data:[string,number,boolean,string,boolean]
data=["javascript",22,true,"typrcript",false]
//accessing
console.log(data[3]);
// modifying
data[1]=100000
console.log("modification:" +data);
// length
console.log("length os the data is:" +data.length);


// ### OPTIONAL PARAMTER ### 
let tiffin:[string,number,string,number,string?]
tiffin=["chapathi",30,"aalu koorma",3]
console.log(tiffin);
console.log("-----------------------");



// ### READ ONLY
let umbrella:readonly[string,number,string]
umbrella=["black",4,"medium"]
// modify ---> modification is not possible in read only
// umbrella[0]="blue"
// umbrella[2]="big"
// push
let cycle:[string,number,number]
cycle=["atlas",12000,1]
cycle.push("blue")
console.log(cycle);









