

// Spread (expandir)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Rest (agrupar)
const sumar = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log(sumar(1, 2, 3)); // 6