"use strict"

class Item {
    constructor(item, harga, waktu) {
        this._item = item,
        this._harga = harga,
        this._waktu = waktu || 1000
    }

    get item() {
        return this._item;
    }

    get harga() {
        return this._harga;
    }

    get waktu() {
        return this._waktu;
    }
}

module.exports = Item;