const beli = require('./beli');

let cumi ={}
cumi.item ='cumi';
cumi.harga = 10000;
cumi.waktu = 500;
let hoisem ={}
hoisem.item ='hoisem';
hoisem.harga = 5000;
hoisem.waktu = 500;
let abalone ={}
abalone.item ='abalone';
abalone.harga = 3000;
abalone.waktu = 500;
let kerang ={}
kerang.item ='kerang';
kerang.harga = 2000;
kerang.waktu = 500;
let caviar ={}
caviar.item ='caviar';
caviar.harga = 1000;
caviar.waktu = 500;

// beli(15000,cumi).then((change1)=>{
//     beli(change1,hoisem).then((change2)=>{
//         beli(change2,abalone).then((change3)=>{
//             beli(change3,kerang).then((change4)=>{
//                 beli(change4,caviar).then((change5)=>{
//                     console.log(`Sisa uang Rp.${change5}`)
//                 }).catch((change5)=>console.log(`Sisa uang Rp.${change5}`));
//             }).catch((change4)=>console.log(`Sisa uang Rp.${change4}`));
//         }).catch((change3)=>console.log(`Sisa uang Rp.${change3}`));
//     }).catch((change2)=>console.log(`Sisa uang Rp.${change2}`));
// }).catch((change1)=>console.log(`Sisa uang Rp.${change1}`));

beli(500,cumi)
.then((change)=> beli(change,hoisem))
.then((change)=> beli(change,abalone))
.then((change)=> beli(change,kerang))
.then((change)=> beli(change,caviar))
.catch((change)=>console.log(`Sisa uang Rp.${change}`));