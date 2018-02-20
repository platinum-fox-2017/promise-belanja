function beli(uang, obj) {
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise((resolve, reject) =>{
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      setTimeout(function(){
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
        resolve(kembalian)
      }, obj.waktu)
    } else {
      console.log(`uang gk cukup nih buat beli ${obj.item}, cuma ada ${uang}`);
      reject(uang)
    }
  })
}

module.exports = beli;
