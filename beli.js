
function beli(uang, obj) {
    console.log(`Saya pergi membeli ${obj.item}`);
    console.log(`Harga ${obj.item} adalah ${obj.harga}`);
    var beliPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let kembalian = uang;
            if (kembalian- obj.harga >= 0) {
                console.log(`Saya sudah membeli ${obj.item} uang kembaliann ${kembalian- obj.harga}`);
                resolve(kembalian- obj.harga);
            } else {
                console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
                reject(kembalian);
            }
        }, obj.waktu);
    })
    return beliPromise;
}

    module.exports = beli;
