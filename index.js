const beli = require('./beli')

let objectBelanja =
    [{
        item: 'nasi',
        harga: 2000,
        waktu: 20
    }, {
        item: 'nasi padang',
        harga: 20000,
        waktu: 30
    }, {
        item: 'nasi goreng',
        harga: 30000,
        waktu: 30
    }, {
        item: 'nasi asin',
        harga: 20000,
        waktu: 30
    }, {
        item: 'nasi putih',
        harga: 5000,
        waktu: 30
    }]

beli(200000, objectBelanja[0]).then((data) => {
    beli(data, objectBelanja[1]).then((data2) => {
        beli(data2, objectBelanja[2]).then((data3) => {
            beli(data3, objectBelanja[3]).then((data4) => {
                beli(data4, objectBelanja[4]).then((data5) => {
                    console.log(data5);
                })
            })
        })
    })
}).catch((err) => {
    console.log(err);
})