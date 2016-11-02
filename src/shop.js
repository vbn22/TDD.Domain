'use strict';


export class Shop {
    constructor(name, open, thins) {
        this._open = open;
        this._name = name;
        this._things = thins
    };

    get isOpen() {
        return this._open;
    };

    open() {
        this._open = true;
    };

    close() {
        this._open = false;
    };

    howMuchMoney(thing) {
        return this._things[thing];
    }
    
    buy(thing){
        return true;
    }
};
