const beli = require('./beli.js');

var obj1 = {
  item:'oreo',
  harga:5000,
  waktu:1000
};

var obj2 = {
  item:'mentos',
  harga:5000,
  waktu:1000
};

var obj3 = {
  item:'bengbeng',
  harga:3000,
  waktu:1000
};

var obj4 = {
  item:'chitato',
  harga:5000,
  waktu:1000
};

var obj5 = {
  item:'doritos',
  harga:7000,
  waktu:1000
};

// nested promise
beli(50000, obj1)
  .then(function(kembalian){
    beli(kembalian, obj2)
      .then(function(kembalian){
        beli(kembalian, obj3)
          .then(function(kembalian){
            beli(kembalian, obj4)
              .then(function(kembalian){
                beli(kembalian, obj5)
              })
              .catch(function(err){
                console.log(err);
              })
          })
          .catch(function(err){
            console.log(err);
          })
      })
      .catch(function(err){
        console.log(err);
      })
  })
  .catch(function(err){
    console.log(err);
  })

// chaining promise
// beli(50000,obj1)
//   .then(function(kembalian){
//     return beli(kembalian, obj2);
//   })
//   .then(function(kembalian){
//     return beli(kembalian, obj3);
//   })
//   .then(function(kembalian){
//     return beli(kembalian, obj4);
//   })
//   .then(function(kembalian){
//     return beli(kembalian, obj5);
//   })
//   .then(function(kembalian){
//     console.log(`Sisa uang tinggal ${kembalian}`);
//   })
//   .catch(function(err){
//     console.log(err);
//   })
