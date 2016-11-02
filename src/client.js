'use strict';

export class Client {
	constructor() {
		this._cookies = 0;
	};

	get isHungry(){
		if (this._cookies == 0){
            return true
        } else {
            return false
        }
	};
};