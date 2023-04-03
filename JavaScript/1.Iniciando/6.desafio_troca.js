let a = 1
let b = 2

let temp = a
cons
a = b
b = temp


console.log(a)
console.log(b)

[a,b] = [b,a]