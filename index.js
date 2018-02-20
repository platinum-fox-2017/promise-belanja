const beli = require('./beli.js')

let obj = [{
    item: 'roti',
    harga: 2000,
    waktu: 500
  }, {
    item: 'kopi',
    harga: 1500,
    waktu: 400
  }, {
    item: 'beras',
    harga: 15000,
    waktu: 800
  }, {
    item: 'sabun',
    harga: 5000,
    waktu: 500
  }, {
    item: 'sampo',
    harga: 2000,
    waktu: 300
  }] 

beli(25000, obj[0]).then(function(kembalian){
    beli(kembalian, obj[1]).then(function(kembalian){
        beli(kembalian, obj[2]).then(function(kembalian){
            beli(kembalian, obj[3]).then(function(kembalian){
                beli(kembalian, obj[4]).then(function(kembalian){
                    return kembalian
                }).catch(function(reject){})
            }).catch(function(reject){})
        }).catch(function(reject){})
    }).catch(function(reject){})
}).catch(function(reject){})