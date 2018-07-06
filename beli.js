function beli(uang, obj){
  return new Promise((res,rej) => {
    console.log(`Saya punya uang sejumlah ${uang}`)
    setTimeout(function(){
      // let kembalian = uang - obj.harga
      if (uang - obj.harga >= 0) {
        console.log(`Kemudian saya membeli ${obj.item} dengan harga ${obj.harga} sehingga sisa uang saya sejumlah ${uang - obj.harga}`);
        res(uang - obj.harga)
      }else{
        console.log(`Maaf sudah ngga punya uang lagi`);
        rej(uang);
      }
    }, obj.waktu);
  })
}

module.exports = beli;
