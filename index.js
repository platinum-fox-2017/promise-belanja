"use strict"
const beli = require('./beli.js');
const Item = require('./item.js');

let uang = 125000;


let yupi = new Item('yupi', 6000);
let uhaCandy = new Item('UHA Candy', 12000);
let uc1000 = new Item('uc1000', 6300);
let aqua = new Item('Aqua', 3200);
let susu = new Item('Frisian Flag 900ml', 18300);
let mobil = new Item('Suzuki Ignis', 175000000, 2000);

beli(uang, yupi)
.then(function(uang){
    return beli(uang,uhaCandy);
})
.then(function(uang){
    return beli(uang,uc1000);
})
.then(function(uang){
    return beli(uang,aqua);
})
.then(function(uang){
    return beli(uang,susu);
})
.then(function(uang){
    return beli(uang,mobil);
})
.catch(function(uang){
    console.log(`pulang gih!`)
});