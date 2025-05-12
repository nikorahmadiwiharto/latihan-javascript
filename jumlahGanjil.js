let numbers = [1, 2, 3, 4, 5, 5];


// Dengan filter dan reduce
// Filter untuk menampung angka-angka ganjil
// Reduce untuk menjumlahkan setiap value pada array yang dihasilkan filter
let jumlahGanjil = (numbers) => 
    numbers
    .filter(n => n % 2 === 1)
    .reduce((total, n) => total + n, 0);

console.log(jumlahGanjil(numbers));

