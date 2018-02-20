const beli = require('./beli.js')

let obj5 = {
    item: 'kaos',
    harga: 100000,
    waktu: 1000
}
let obj6= {
    item: 'sepatu',
    harga: 350000,
    waktu: 1000
}
let obj7= {
    item: 'sendal',
    harga: 80000,
    waktu: 1000
}
let obj8= {
    item: 'topi',
    harga: 60000,
    waktu: 1000
}
let obj9= {
    item: 'jaket',
    harga: 200000,
    waktu: 1000
}

let duit = 1500000


beli(duit, obj5)
    .then(function(kembalian){
        beli(kembalian, obj6)
            .then(function(kembalian){
                beli(kembalian, obj7)
                    .then(function(kembalian){
                        beli(kembalian, obj8)
                            .then(function(kembalian){
                                beli(kembalian, obj9)
                                    .then(function(kembalian){

                                    })
                                    .catch(function(err){
                                        console.log(err)
                                    })
                            })
                            .catch(function(err){
                                console.log(err)
                            })
                    })
                    .catch(function(err){
                        console.log(err)
                    })
            })
            .catch(function(err){
                console.log(err)
            })
    })
    .catch(function(err){
        console.log(err)
    })