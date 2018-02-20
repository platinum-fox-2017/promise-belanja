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

beli(uang,yupi)
    .then(function(uang){
        beli(uang, uhaCandy)
        .then(function(uang){
            beli(uang, uc1000)
            .then(function(uang){
                beli(uang, aqua)
                .then(function(uang){
                    beli(uang,susu)
                    .then(function(uang){
                        beli(uang, mobil)
                        .then(function(){})
                        .catch(function(kurang){
                            console.log(`duit nya kurang ${kurang}`)
                        })
                    })
                    .catch(function(kurang){
                        console.log(`duit nya kurang ${kurang}`)
                    })
                })
                .catch(function(kurang){
                    console.log(`duit nya kurang ${kurang}`)
                })
            })
            .catch(function(kurang){
                console.log(`duit nya kurang ${kurang}`)
            })
        })
        .catch(function(kurang){
            console.log(`duit nya kurang ${kurang}`)
        })
    })
    .catch(function(kurang){
        console.log(`duit nya kurang ${kurang}`);
    });