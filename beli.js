function beli(uang, obj){
  return new Promise((res,rej) => {
    console.log(`Saya punya uang sejumlah ${uang}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian >= 0) {
        console.log(`Kemudian saya membeli ${obj.item} dengan harga ${obj.harga} sehingga sisa uang saya sejumlah ${kembalian}`);
        res(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} yang harganya ${obj.harga}, butuh uang lagi sejumlah ${(kembalian - obj.harga)*-1}`);
        res(0);
      }
    }, obj.waktu);
  })
}

module.exports = beli;
