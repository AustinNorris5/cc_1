//Task 1: Variables
let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log(employeeName);
console.log(typeof employeeName);

console.log(employeeID);
console.log(typeof employeeID);

console.log(isActive);
console.log(typeof isActive);

//Task 2: Primitive Data Types
let productName = "Hat";
const productPrice = 14.99;
var isAvailable = true;

console.log("productName:",productName,"Type:",typeof productName);
console.log("productPrice:",productPrice,"Type:",typeof productPrice);
console.log("isAvailable:",isAvailable,"Type:",typeof isAvailable);

//Task 3: Number Data Type
let accountBalance = 1000;

accountBalance += 500;
console.log("Balance after addition:",accountBalance);

accountBalance -= 200;
console.log("Balance after subtraction:",accountBalance);

accountBalance *= 3;
console.log("Balance after multiplication:",accountBalance);

accountBalance /= 2;
console.log("Balance after division:",accountBalance);

//Task 4: String Data Type
let customerName = "Jane Doe";
let welcomeMessage = "Welcome, " + customerName;
console.log(welcomeMessage);

//Task 5: Boolean Data Type
let isLoggedIn = true;
let hasAccessPermission = false;

let canAccessSystem = isLoggedIn && hasAccessPermission;

let isUnauthorized = !canAccessSystem;

console.log("Is logged in:", isLoggedIn);
console.log("Has access permission:", hasAccessPermission);
console.log("Can access system:", canAccessSystem);
console.log("is unauthorized:", isUnauthorized);

