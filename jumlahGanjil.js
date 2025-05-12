let numbers = [10, 11];

// Dengan filter dan reduce
// Filter untuk menampung angka-angka ganjil
// Reduce untuk menjumlahkan setiap value pada array yang dihasilkan filter
let jumlahGanjil = (numbers) => {
    let totals = 0;
    totals = numbers
    .filter(angka => angka % 2 === 1)
    .reduce((total, angka) => total + angka, 0); 
    // 0 adalah intial value (jika tidak terdapat nilai ganjil di array)
    console.log((totals > 0)? `Jumlah angka dari semua ganjil adalah ${totals}`: 'tidak ada angka ganjil');
}


// Menggunakan forEach
let jumlahGanjil1 = (numbers) => {
    let nilai = 0;
    numbers.forEach((angka) => {
        if (angka % 2 == 1){
            nilai += angka;
        }
    });
    console.log((nilai > 0)? `Jumlah angka dari semua ganjil adalah ${nilai}`: 'tidak ada angka ganjil');
};
