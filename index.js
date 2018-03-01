const beli = require('./beli')
let objItem =[
    {
        item : 'Susu',
        harga : 35000,
        waktu : 100
    },
    {
        item : 'Pensil',
        harga : 2000,
        waktu : 50
    },
    {
        item : 'Buku',
        harga : 15000,
        waktu : 50
    },
    {
        item : 'Tas',
        harga : 100000,
        waktu : 100
    },
    {
        item : 'Penggaris',
        harga : 3000,
        waktu : 15
    },
]

let uang = 100000

beli(uang, objItem[0])
.then(sisauang=>beli(sisauang, objItem[1]))
.then(sisauang1=>beli(sisauang1, objItem[2]))
.then(sisauang2=>beli(sisauang2, objItem[3]))
.then(sisauang3=>beli(sisauang3, objItem[4]))
.catch(err=>console.log(err))