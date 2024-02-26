// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); // Throws ReferenceError
    // console.log(functionLet); // Throws ReferenceError
    // console.log(functionConst); // Throws ReferenceError


{ let i=4;
    console.log(i);
}

j=5;

var result = 0;
var result = (j==4) ? "Yes" : "No";
console.log(result);

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }


for (let i = 1; i <= 5; i++) {console.log(8);}

  // Fibonacci series
  let limit = 50;
  let a = 0;
  let b = 1;

  while (a <= limit) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }