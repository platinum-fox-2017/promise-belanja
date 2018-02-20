const Belanja = require('./beli.js')

let indomie =  {item: 'indomie', harga: 1500, time: 500}
let sarden =  {item: 'sarden', harga: 7000, waktu: 500}
let gula = {item : 'gula', harga: 4000, waktu: 500}
let garam = {item : 'garam', harga: 3000, waktu: 500}
let royco = {item : 'royco', harga: 2000, waktu: 500}

Belanja.beli(10000, indomie)
  .then(kembalian => {Belanja.beli(kembalian, sarden)
    .then(kembalian => {Belanja.beli(kembalian, gula)
      .then(kembalian => {Belanja.beli(kembalian, garam)
        .then(kembalian => {Belanja.beli(kembalian, royco)})})})
        .catch(err => {console.log(err)})})