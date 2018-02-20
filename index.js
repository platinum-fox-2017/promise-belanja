const beli = require('./beli')

class ObjItem {
  constructor(item,harga,waktu) {
    this.item = item
    this.harga = harga
    this.waktu = waktu
  }
}

let cabe = new ObjItem('cabe',3500,1000)
let bawang = new ObjItem('bawang',4500,1000)
let kangkung = new ObjItem('kangkung',5500,1000)
let tomat = new ObjItem('tomat',3200,1000)
let wafer = new ObjItem('wafer',5000,1000)

// beli(50000,cabe)

beli(50000,cabe).then(function(data){
  beli(data,bawang).then(function(data){
    beli(data,kangkung).then(function(data){
      beli(data,tomat).then(function(data){
        beli(data,wafer).then(function(data){
          console.log(`INI SISA UANGNYA ${data} RUPIAH, MASIH BISA BELI ROKOK`);
        })
      })
    })
  })
}).catch(function(err){
  console.log('maaf pak error');
})
