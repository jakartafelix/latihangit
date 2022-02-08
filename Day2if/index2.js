// let tes = (3>2)
// console.log(tes)

//  A = 85 - 100
//  B = 75 - 84
//  C = 60 - 74
//  D = 0 -59
//  F = null

// let nilai = 84.5
// let grade
// if(nilai>=85 && nilai <=100){grade = `A`}
// else if(nilai>=75 && nilai<85){grade = `B`}
// else if(nilai>=60 && nilai<75){grade = `C`}
// else if(nilai>=0 && nilai<60){grade = `D`}
// else{grade = `salah input`}

// console.log(grade)

let berat = 140
let tinggi = 1.78
let imt = berat/(tinggi**2)
let jenis

if(imt<18.5){jenis = `Berat badan kurang`}
else if(imt>=18.5 && imt<=24.9){jenis = `Berat badan ideal`}
else if(imt>=25 && imt<=29.9){jenis = `Berat badan berlebih`}
else if(imt>=30 && imt<=39.9){jenis = `Berat badan sangat berlebih`}
else{jenis = `obesitas`}

console.log(jenis)







