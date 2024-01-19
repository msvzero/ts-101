// Optional chaining allows you to safely access properties and 
// methods of an object without having to check if each level exists. It helps in avoiding TypeError when accessing 
// nested properties or calling methods on potentially undefined or null values.

// Here's an example of how to use optional chaining in TypeScript:

// Sample object
const user = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    }
  };
  
  // Accessing nested properties
  const street = user?.address?.street;
  console.log(street); // Output: '123 Main St'
  
  // Calling methods
  const uppercaseName = user?.name.toUpperCase();
  console.log(uppercaseName); // Output: 'JOHN DOE'
  
  // Handling null or undefined values
//   const nonExistentProperty = user?.nonExistentProperty;
//   console.log(nonExistentProperty); // Output: undefined


// In the above example, the ?. operator is used to safely access the nested properties and methods. 
// If any of the intermediate properties (address, name, etc.) are undefined or null, the result will be undefined.