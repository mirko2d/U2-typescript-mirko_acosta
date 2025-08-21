interface PersonOptional { 
  firstName: string;
  lastName?: string; }; // ? INDICA QUE ES OPCIONAL

let person2: PersonOptional = {
  firstName: "Axel"    
};

console.log(person2);
