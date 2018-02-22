const beli = require('./beli');
const belanjaan = {
  item: 'baju',
  harga: 1000,
  waktu: 1000
};

const belanja = (uangBelanja) => {
  const promise = new Promise((resolve, reject) => {
    if (uangBelanja <= 0) {
      reject('Belanja Selesai, Uang Sudah Habis');
    } else {
      let doBeli = beli(uangBelanja,belanjaan,belanja);
      resolve('Lanjut Belanja');
    }
  })
  return promise;
}

belanja(6000).then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
})
