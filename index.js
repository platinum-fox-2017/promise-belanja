let beli = require('./beli.js')
var uang = 1000000
var mouse = {
  item: 'mouse',
  harga: 175000,
  waktu: 3000
}
var keyboard = {
  item: 'keyboard',
  harga: 200000,
  waktu: 4000
}
var flashdisk = {
  item: 'flashdisk',
  harga: 50000,
  waktu: 1000
}

var cd = {
  item: 'cd',
  harga: 3500,
  waktu: 200
}

var usb = {
  item: 'usb wireless',
  harga: 571500,
  waktu: 3000
}

beli(uang,mouse).then(function(data){
  beli(data,keyboard).then(function(data2){
    beli(data2,flashdisk).then(function(data3){
      beli(data3,cd).then(function(data4){
        beli(data4,usb).then(function(data5){
          console.log('sisa uang saya '+data5);
        })
      })
    })
  })
})
