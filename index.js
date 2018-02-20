const beli = require('./beli.js');

let mouse = {
  item: 'Mouse',
  harga: 50000,
  waktu: 1000
};

let money = 90000000;

beli(money, mouse).then((kembalian)=>{
  beli(kembalian,mouse).then((kembalian)=>{
    beli(kembalian,mouse).then((kembalian)=>{
      beli(kembalian,mouse).then((kembalian)=>{
        beli(kembalian,mouse).then((kembalian)=>{
          beli(kembalian,mouse).then((kembalian)=>{
            beli(kembalian,mouse).then((kembalian)=>{
              beli(kembalian,mouse).then((kembalian)=>{

              }).catch((err)=>{console.log(err)})
            }).catch((err)=>{console.log(err)})
          }).catch((err)=>{console.log(err)})
        }).catch((err)=>{console.log(err)})
      }).catch((err)=>{console.log(err)})
    }).catch((err)=>{console.log(err)})
  }).catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)});
