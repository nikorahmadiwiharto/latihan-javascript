let numbers = [1, 2, 3, 4, 5, 5];

let jumlahGanjil = (numbers) => {
    numbers.filter((angka) => angka % 2 === 1)
    .reduce((angka1, angka2) => angka1+angka2)
}

console.log(jumlahGanjil(numbers));