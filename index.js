const beli = require('./beli.js');

let ikan = {
  item: 'ikan hiu',
  harga: 2000,
  waktu: 2000
}
let pesawat = {
  item: 'pesawat',
  harga: 7000,
  waktu: 5000
}
let whiskas = {
  item: 'whiskas',
  harga: 1000,
  waktu: 2000
}
let voucher = {
  item: 'voucher delta',
  harga: 2000,
  waktu: 2000
}
let buku = {
  item: 'buku',
  harga: 1000,
  waktu: 3000
}

let items = [ikan,pesawat,whiskas,voucher,buku]
let cash = 10000

beli(cash,items[0]).then(function (uang_sisa) {
  beli(uang_sisa,items[1]).then(function (uang_sisa1) {
    beli(uang_sisa1,items[2]).then(function (uang_sisa2) {
      beli(uang_sisa2,items[3]).then(uang_sisa3 => {
        beli(uang_sisa3,items[4]).then(uang_sisa4 => {
          if(uang_sisa4 === 0) {
            console.log('Maaf uang anda habis');
          } else {
            console.log('Alhamdulillah, sisa uang',uang_sisa4,'masih bisa jajan');
          };
        }).catch(console.log(err);)
      }).catch(console.log(err);)
    }).catch(console.log(err))
  }).catch(console.log(err);)
}).catch(console.log(err););
