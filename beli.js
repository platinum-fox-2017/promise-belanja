function beli(uang,obj) {
  let myPromise = new Promise(function(resolve,reject){
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(0)
      }
    }, obj.waktu);
  });
  return myPromise
}

module.exports = beli;