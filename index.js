const beli = require('./beli.js')

let obj =  [{item: 'handphone', harga: 5000000, waktu: 900},
            {item: 'casing hp', harga: 200000, waktu: 400},
            {item: 'pulsa', harga: 50000, waktu: 200},
            {item: 'mouse', harga: 150000, waktu: 1500},
            {item: 'batagor', harga: 10000, waktu: 800}
            ] 

function display (kembalian){
    console.log(kembalian)
}

beli(7000000, obj[0]).then(sisa => {
    beli(sisa, obj[1]).then(sisa => {
        beli(sisa, obj[2]).then(sisa => {
            beli(sisa, obj[3]).then(sisa => {
                beli(sisa, obj[4]).then(sisa => console.log(sisa))
                .catch(error => console.log(error))
            }).catch(error => console.log(error))
        }).catch(error => console.log(error))
    }).catch(error => console.log(error))
}).catch(error => console.log(error))