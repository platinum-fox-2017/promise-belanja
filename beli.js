function beli(uang, obj){
  let promise =  new Promise(function (resolve, reject) {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        var warn = `uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`;
        reject(warn)
      }
    }, obj.waktu);
 })
 return promise;
}

module.exports = {
  beli: beli,
}
