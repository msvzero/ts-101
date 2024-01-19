// In TypeScript, you can use the Object.freeze() method to make an object 
// immutable, meaning its properties cannot be modified, added, or removed.

const obj = {
    name: "John",
    age: 30
  };
  
  Object.freeze(obj);
  
  // Trying to modify a property
  obj.age = 40; // This will have no effect
  
  // Trying to add a new property
  // obj.city = "New York"; // This will have no effect
  
  // Trying to delete a property
  // delete obj.name; // This will have no effect
  
  console.log(obj); // Output: { name: "John", age: 30 }