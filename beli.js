class Belanja {
  static beli(uang, obj) {
    return new Promise((resolve, reject)=>{
      console.log(`Saya pergi membeli ${obj.item}`)
      setTimeout(()=>{
        let kembalian = uang - obj.harga
        if(kembalian > obj.harga) {
          console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
          resolve(kembalian)
        } else {
          reject(`uang gak cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`)
        }
      }, obj.waktu)
    })
  }
}

module.exports = Belanja;