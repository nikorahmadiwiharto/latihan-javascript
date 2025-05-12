let numbers = [10, 1];


// Dengan filter dan reduce
// Filter untuk menampung angka-angka ganjil
// Reduce untuk menjumlahkan setiap value pada array yang dihasilkan filter
// let jumlahGanjil = (numbers) => 
//     numbers
//     .filter(angka => angka % 2 === 1)
//     .reduce((total, angka) => total + angka);

// console.log(jumlahGanjil(numbers));

// Menggunakan forEach

let jumlahGanjil = (numbers) => {
    let nilai = 0;
    numbers.forEach((angka) => {
        if (angka % 2 == 1){
            nilai += angka;
        }
    });
    return nilai;
};
