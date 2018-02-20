const beli = require('./beli')

let barang1= {
    item: 'teri',
    harga: 5000,
    waktu: 1000
}

let barang2 = {
    item: 'sambel',
    harga: 4000,
    waktu: 1000
}

let barang3 = {
    item: 'botol minum',
    harga: 5000,
    waktu: 1000,
}

let barang4 = {
    item: 'Pulsa',
    harga: 40000,
    waktu: 1000,
}

let barang5 = {
    item: 'Charger',
    harga: 40000,
    waktu: 1000,
}



beli(100000,barang1).then((data)=>{
    beli(data,barang2).then((data2)=>{
        beli(data2,barang3).then((data3)=>{
            beli(data3,barang4).then((data4)=>{
                beli(data4,barang5).then((data5)=>{
                    
                })
            })
        })
    })
}).catch((err)=>{
    console.log(err)
})