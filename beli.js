function beli(uang, obj) {
  const promise = new Promise((resolve, reject) => {
      setTimeout(function() {
        if (uang - obj.harga > 0) {
          console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${uang - obj.harga}`);
          resolve(uang - obj.harga);
        }
        else {
          console.log(`uang gk cukup nih buat beli ${obj.item}, uangnya kurang ${(uang - obj.harga) * -1}`);
          reject((uang - obj.harga) * -1);
        }
      }, obj.waktu);
    }
  );

  return promise;
}

module.exports = beli;
