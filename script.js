
 // String methods
 let str = "Hello, World!";
 console.log("Length: " + str.length);
 console.log("Uppercase: " + str.toUpperCase());
 console.log("Substring: " + str.substring(0, 5));
 console.log("Index of 'World': " + str.indexOf("World"));
 console.log("Replace: " + str.replace("Hello", "Hi"));

 // Number methods
 let num = 12.3456;
 console.log("Fixed: " + num.toFixed(1));
 console.log("Exponential: " + num.toExponential());
 console.log("Precision: " + num.toPrecision(4));
 console.log("Square root: " + Math.sqrt(num));
 console.log("Integer value: " + Math.floor(num));

 // Array methods
 let arr = [1, 2, 3, 4, 5, 6];
 console.log("Join: " + arr.join(", "));
 console.log("Pop: " + arr.pop());
 console.log("Reverse: " + arr.reverse());
 console.log("Slice: " + arr.slice(1, 6));
 console.log("Push: " + arr.push(7));

 // Date methods
 let now = new Date();
 console.log("1. Full Year: " + currentDate.getFullYear());
 console.log("2. Month: " + (currentDate.getMonth() + 1)); 
 console.log("3. Date: " + currentDate.getDate());
 console.log("4. Day: " + currentDate.getDay()); 
 console.log("5. Hours: " + currentDate.getHours());
 // Function methods
 function greet(name) {
   console.log("Hello, " + name + "!");
 }
 greet("Hlo");

 let multiply = function(a, b) {
   return a * b;
 };
 console.log("Multiplication: " + multiply(3, 3));