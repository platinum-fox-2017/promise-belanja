const beli = require('./beli.js');

var uang   = 950000;

let arrObjItem  = [
                    {
                        item: 'jersey',
                        harga: 100000,
                        waktu: 10000
                    },
                    {
                        item: 'sepatu',
                        harga: 700000,
                        waktu: 8000
                    },
                    {
                        item: 'kaos kaki',
                        harga: 150000,
                        waktu: 3000
                    },
                    {
                        item: 'dekker',
                        harga: 20000,
                        waktu: 1000
                    },
                    {
                        item: 'celana',
                        harga: 80000,
                        waktu: 9000
                    }
                ]

beli(uang,arrObjItem[0])
.then(function(kembalian){
    beli(kembalian,arrObjItem[1])
    .then(function(kembalian){
        beli(kembalian,arrObjItem[2])
        .then(function(kembalian){
            beli(kembalian,arrObjItem[3])
            .then(function(kembalian){
                beli(kembalian,arrObjItem[4])
                .then(function(kembalian){})
                .catch(function(err){
                    console.log("Sisa duit : " + err);
                })
            })
            .catch(function(err){
                console.log("Sisa duit : " + err);
            })
        })
        .catch(function(err){
            console.log("Sisa duit : " + err);
        })
    })
    .catch(function(err){
        console.log("Sisa duit : " + err);
    })
})
.catch(function(err){
    console.log("Sisa duit : " + err);
})