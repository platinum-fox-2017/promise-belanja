const beli = require('./beli.js');

const uang = 1000000;

let objTas = {
	item: 'Tas',
	harga: 250000,
	waktu: 1000
};

let objSepatu = {
	item: 'Sepatu',
	harga: 100000,
	waktu: 1000
};

let objBaju = {
	item: 'Baju',
	harga: 300000,
	waktu: 1000
};

let objCelana = {
	item: 'Celana',
	harga: 450000,
	waktu: 1000
};

let objDompet = {
	item: 'Dompet',
	harga: 100000,
	waktu: 1000
};


beli(uang, objTas).then(uang_sisa_tas => {
	beli(uang_sisa_tas, objSepatu).then(uang_sisa_sepatu => {
		beli(uang_sisa_sepatu, objBaju).then(uang_sisa_baju => {
			beli(uang_sisa_baju, objCelana).then(uang_sisa_celana => {				
				beli(uang_sisa_celana, objDompet).then(uang_sisa_dompet => {}).catch(error => {});
			}).catch(error => {});
		}).catch(error => {});
	}).catch(error => {});
}).catch(error => {});