const Beli = require('./beli')

let bahan = [
    {
        item: "Pisang",
        harga: 50000,
        waktu: 1000,
    }, {
        item: "Mangga",
        harga: 20000,
        waktu: 1000,
    }, {
        item: "Manggis",
        harga: 25000,
        waktu: 1000,
    }, {
        item: "Rambutan",
        harga: 15000,
        waktu: 1000,
    }, {
        item: "Jeruk",
        harga: 30000,
        waktu: 1000,
    }
]

Beli(20000, bahan[0]).then(function (data) {
   Beli(data, bahan[1]).then(function (data1) {
      Beli(data1, bahan[2]).then(function (data2) {
          Beli(data2, bahan[3]).then(function (data3) {
              Beli(data3, bahan[4]).then(function (data4) {
                 console.log(`SISA UANG ${data4}`)
             })
          })
      })
   })
}).catch(function (err) {
    console.log(`Uang tidak cukup ${err}`)
})