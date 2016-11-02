'use strict';

export class Client {
	constructor(shop) {
		this._cookies = 0;
		this._shop = shop;
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
};