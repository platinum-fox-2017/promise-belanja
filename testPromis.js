// function Sandwich(stock) {
//     return new Promise ((resolve,reject) => {
//         if (stock >= 1) {
//             resolve ('Ini mas cheese burgernya !')
//         } else {
//             reject ('Maaf mas burgernya habis !')
//         }
//     })

// }

// Sandwich(0).then(success => {
//             console.log(success)
//         }).catch(error => {
//             console.log(error);
//         })


// class Burger {
//         constructor() {
//         }
//         static getOrder(stock) {
//             return new Promise ((resolve,reject) => {
//                 if (stock >= 1) {resolve ('Ini mas cheese burgernya !')}
//                 else {reject ('Maaf mas burgernya habis !')}
//             })
//         }
//     }

// Burger.getOrder(3).then(success => {
//         console.log(success)
//     }).catch(error => {
//         console.log(error);
//     })