function beli(uang, obj) {
  const beliPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log(`Saya pergi membeli ${obj.item}`);
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian);
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(Math.abs(kembalian));
      }
    }, 1000);
  })

  return beliPromise
}

module.exports = beli;
