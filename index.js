const beli = require('./beli')
let sepatu =
  {
    item: 'sepatu',
    harga: 10000,
    waktu: 2000
  }
let tas =
  {
    item: 'tas',
    harga: 12000,
    waktu: 2000
  }
let jam =
  {
    item: 'jam',
    harga: 14000,
    waktu: 2000
  }
let topi =
  {
    item: 'topi',
    harga: 16000,
    waktu: 2000
  }
let jaket =
  {
    item: 'jaket',
    harga: 18000,
    waktu: 2000
  }

beli(100000, sepatu).then(function (result) {
  beli(result, tas).then(function (result2) {
    beli(result2, jam).then(function (result3) {
      beli(result3, topi).then(function (result4) {
        beli(result4,jaket).then(function (result5) {
          console.log('sisa uang: ' + result5);
        })
      })
    })
  })
})
