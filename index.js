const Beli = require('./beli.js')
const beli = Beli.beli;

let obj = [{ item: 'Kopi', harga: 5000, waktu: 1000},
          {item: 'Roti', harga: 7000, waktu: 1000},
          {item: 'Gorengan', harga: 3000, waktu: 1000},
          {item: 'Kerupuk', harga: 2000, waktu: 1000},
          {item: 'Pisang', harga: 3000, waktu: 1000}];

beli(20000, obj[0])
  .then(function(kembalian){
    beli(kembalian, obj[1])
      .then(function(kembalian){
        beli(kembalian, obj[2])
          .then(function(kembalian){
            beli(kembalian, obj[3])
              .then(function(kembalian){
                beli(kembalian, obj[4])
                  .then(function(kembalian){
                    beli(kembalian, obj[0])
                      .then(function(kembalian){
                        beli(kembalian, obj[0])
                      })
                      .catch(function(warn){
                        console.log(warn)
                      })
                  })
                  .catch(function(warn){
                    console.log(warn)
                  })
              })
              .catch(function(warn){
                console.log(warn)
              })
          })
          .catch(function(warn){
            console.log(warn)
          })
      })
      .catch(function(warn){
        console.log(warn)
      })
  })
  .catch(function(warn){
    console.log(warn)
  })

