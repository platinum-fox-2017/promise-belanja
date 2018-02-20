const beli = require('./beli.js')


let arrOfObj = [{
  item : 'baju baru',
  harga : 600,
  waktu : 1000
},{
  item : 'celana baru',
  harga : 500,
  waktu : 2000
},{
  item : 'kue keranjang meleleh',
  harga : 100,
  waktu : 3000
},{
  item : 'ayam goreng bumbu seaweed',
  harga : 100,
  waktu : 5000
},{
  item : 'thai milk tea with black pearl',
  harga : 100,
  waktu : 6000
}]
// beli(1000,arrOfObj[0]).then(kembalian =>{
//   console.log(`sisa uang adalah ${kembalian}`)
//   beli(kembalian,arrOfObj[1]).then(kembalianBeliItem1 =>{
//     console.log(`sisa uang adalah ${kembalianBeliItem1}`)
//     beli(kembalianBeliItem1,arrOfObj[2]).then(kembalianBeliItem2 =>{
//       console.log(`sisa uang adalah ${kembalianBeliItem2}`)
//       beli(kembalianBeliItem2,arrOfObj[3]).then(kembalianBeliItem3 =>{
//         console.log(`sisa uang adalah ${kembalianBeliItem3}`)
//         beli(kembalianBeliItem3,arrOfObj[4]).then(kembalianBeliItem4 =>{
//           console.log(`sisa uang adalah ${kembalianBeliItem4}`)
//         }).catch(errBeli4 =>{
//           console.log(errBeli4)
//         })
//       }).catch(failBeli3 => {
//         console.log(failBeli3)
//       })
//     }).catch(failBeli2 =>{
//       console.log(failBeli2)
//     })
//   }).catch(failBeli1 =>{
//     console.log(failBeli1)
//   })
// }).catch(failBeli =>{
//   console.log(failBeli)
// })

beli(1000,arrOfObj[0]).then(kembalian =>{
  console.log(`sisa uang adalah ${kembalian}`)
  return beli(kembalian,arrOfObj[1])
}).then(kembalian1 =>{
  console.log(`sisa uang adalah ${kembalian1}`)
  return beli(kembalian1,arrOfObj[2])
}).then(kembalian2=>{
  console.log(`sisa uang adalah ${kembalian2}`)
  return beli(kembalian2,arrOfObj[3])
}).then(kembalian3=>{
  console.log(`sisa uang adalah ${kembalian3}`)
  return beli(kembalian3,arrOfObj[4]) 
}).then(kembalian4=>{
  console.log(`sisa uang adalah ${kembalian4}`)
}).catch(error=>{
  console.log(error)
})


