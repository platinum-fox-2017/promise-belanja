// const fs = require('fs');
const beli = require('./beli.js');

var obj1 = {};
obj1.item = 'bubur';
obj1.harga = 1000;
obj1.waktu = 2000;

var obj2 = {};
obj2.item = 'ayam';
obj2.harga = 2000;
obj2.waktu = 2000;

var obj3 = {};
obj3.item = 'sayur';
obj3.harga = 4000;
obj3.waktu = 2000;

var obj4 = {};
obj4.item = 'nasi';
obj4.harga = 5000;
obj4.waktu = 2000;

var obj5 = {};
obj5.item = 'sate';
obj5.harga = 7000;
obj5.waktu = 2000;

beli(2000,obj1).then(success => {console.log(success);
    beli(success,obj2).then(success => {console.log(success);
        beli(success,obj3).then(success => {console.log(success);
            beli(success,obj4).then(success => {console.log(success);
                beli(success,obj5).then(success => {console.log(success);
    
                }).catch(error => {console.log(error);});
            }).catch(error => {console.log(error);});
        }).catch(error => {console.log(error);});
    }).catch(error => {console.log(error);});
}).catch(error => {console.log(error);});

