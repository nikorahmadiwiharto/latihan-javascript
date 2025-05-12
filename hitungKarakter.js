let kalimat = "Halo Dunia";
    kalimatArray = kalimat.split('');

// Output: { H: 1, a: 2, l: 1, o: 1, D: 1, u: 1, n: 1, i: 1 }

let hitungKarakter = (kalimatArray) => {
    let frekuensi = {};
    kalimatArray.forEach((karakter) => {
        if (karakter !== ' '){
            if (frekuensi[karakter]){
                frekuensi[karakter] += 1;
            } else {
                frekuensi[karakter] = 1;
            }
        }
    });
    return frekuensi;
}

let reverseWords = (kalimatString) => {
    return kalimatString.split(' ').reverse().join(' ');
}

console.log(reverseWords("saya belajar javascript")); 
