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

// let promise1 = beli(22000,cumi);
// let promise2 = beli(promise1,hoisem);
// let promise3 = beli(promise2,abalone);
// let promise4 = beli(promise3,kerang);
// let promise5 = beli(promise4,caviar);

// Promise.all([promise1]).then((change)=>{
//     console.log(`Sisa uang Rp.${change}`)
// }).catch((change)=> console.log(`Uang anda tidak cukup, kurang ${change}`));

beli(15000,cumi).then((change1)=>{
    beli(change1,hoisem).then((change2)=>{
        beli(change2,abalone).then((change3)=>{
            beli(change3,kerang).then((change4)=>{
                beli(change4,caviar).then((change5)=>{
                    console.log(`Sisa uang Rp.${change5}`)
                }).catch((change5)=>console.log(`Sisa uang Rp.${change5}`));
            }).catch((change4)=>console.log(`Sisa uang Rp.${change4}`));
        }).catch((change3)=>console.log(`Sisa uang Rp.${change3}`));
    }).catch((change2)=>console.log(`Sisa uang Rp.${change2}`));
}).catch((change1)=>console.log(`Sisa uang Rp.${change1}`));
