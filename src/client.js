'use strict';

export class Client {
	constructor(shop,money) {
		this._cookies = 0;
		this._shop = shop;
        this._money = money;
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
    };

    get canBuyCookies(){
        if (this._money > 0){
            return true;
        } else {
            return false;
        }
    };

    putInWallet(money){
        this._money += money;
    };

    setWallet(money){
        this._money = money;
    };

    buy(thing){
        if (this._money > this._shop.howMuchMoney(thing)){
            return true
        } else {
            return false
        }
    }

};