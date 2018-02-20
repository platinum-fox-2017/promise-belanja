function beli(uang, obj){
  console.log(`+ Saya mempunyai uang ${uang}`)      
  return new Promise(function(resolve, reject) {
    console.log(`  Saya pergi membeli ${obj.item}`)    
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`  Saya sudah membeli ${obj.item} dengan harga ${obj.harga}, uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`  yaahhhh... uang yang tersisa ${uang} gk cukup nih buat beli ${obj.item} yang harganya ${obj.harga}`);
        return
        resolve(0)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
