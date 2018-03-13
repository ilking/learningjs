let vals = [1,2,3];
vals.push(44, 33, -11)
console.log(vals);
let res = vals.pop();
console.log(vals);
let res2 = vals.shift();
console.log(vals);
vals.splice(0,3, 3, 33, 44, 55);
console.log(vals);
