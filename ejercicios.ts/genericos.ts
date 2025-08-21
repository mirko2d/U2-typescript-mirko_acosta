function identity<T>(arg: T): T { 
      return arg;
}

console.log(identity<number>(42)); 
console.log(identity<string>("Hola mundo")); 
console.log(identity<boolean>(true)); 
