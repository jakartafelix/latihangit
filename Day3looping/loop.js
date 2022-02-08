// let x = 1

// while (x<=10) {
//     console.log(`Mobil no. ${x} beroperasi dengan baik`)
//     ; x++;
// }

let totalAngkot = 10
let angkotJalan = 6
let noAngkot = 1

while (noAngkot<=angkotJalan) {
    console.log(`Mobil no. ${noAngkot} beroperasi dengan baik`);
    noAngkot++;
}

for (let noAngkot = angkotJalan+1; noAngkot <= totalAngkot; noAngkot++){
    console.log(`Mobil no. ${noAngkot} rusak`)  
}
