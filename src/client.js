'use strict';

export class Client {
	constructor(shop) {
		this._cookies = 0;
		this._shop = shop;
        this._wallet= 10;
	};

	get isHungry(){
		if (this._cookies == 0){
            return true
        } else {
            return false
        }
	};

    get canEnterIntoShop(){
        if (this._shop.isOpen){
            return true
        } else {
            return false
        }
    }

    get canBuyCookies(){
        if (this._wallet > 0){
            return true;
        } else {
            return false;
        }
    }

    putInWallet(money){
        this._wallet += money;
    }
};