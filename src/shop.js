'use strict';


export class Shop {
    constructor(name,open) {
		this._open = open;
		this._name = name;
	};
    get isOpen(){
        return this._open;
    }
};
