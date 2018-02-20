const fs = require('fs');
const beli = require('./beli');

var uang = 140000;

class objItem {
    constructor(item, harga, waktu) {
        this.item = item;
        this.harga = harga;
        this.waktu = waktu;
    }
}


beli(uang, new objItem('Baju', 30000))
    .then(function(kembalian) {
        beli(kembalian, new objItem('Celana', 40000))
            .then(function(kembalian) {
                beli(kembalian, new objItem('Sepatu', 30000))
                    .then(function(kembalian) {
                        beli(kembalian, new objItem('Topi', 20000))
                            .then(function(kembalian) {
                                beli(kembalian, new objItem('Rompi', 30000))
                                    .then(function(){})
                                    .catch(function(err) {});
                            })
                            .catch(function(err) {});
                    })
                    .catch(function(err) {});
            })
            .catch(function(err) {});
    })
    .catch(function(err) {});

// Using Promise Chaining
// beli(uang, new objItem('Baju', 30000))
//     .then(function(kembalian) {
//         return beli(kembalian, new objItem('Celana', 40000))
//     })
//     .then(function(kembalian) {
//         return beli(kembalian, new objItem('Sepatu', 20000))
//     })
//     .then(function(kembalian) {
//         return beli(kembalian, new objItem('Topi', 30000))
//     })
//     .then(function(kembalian) {
//         return beli(kembalian, new objItem('Rompi', 40000))
//     })
//     .catch(function(err) {console.log(`Sisa uang anda: ${err}`);});
