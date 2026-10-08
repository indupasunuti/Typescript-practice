function greet<T>(message:T):T{
return message;
}
console.log(greet<number>(101));
console.log(greet<string>('indu'));
console.log(greet<number[]>([10,20,30]))




