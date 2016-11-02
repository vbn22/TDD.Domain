import assert from 'assert'
import { Client } from '../src/client';
import { Shop } from '../src/shop';



suite('When I Buy Cookies', function () {
    let person;
    let shop;
    setup(function() {
        shop = new Shop('Okey',true);
        person = new Client(shop);
    });

    suite('When I am dont have cookies', function () {
        test('I am hungry', function() {
            let isHungry = person.isHungry;
            assert.equal(true, isHungry);
        });
    });

    suite('When shop is open', function () {
        test('I can enter into shop', function() {
            let canEnterIntoShop = person.canEnterIntoShop;
            assert.equal(true, canEnterIntoShop);
        });
    });

    suite('When shop is closed', function () {
        test('I can NOT enter into shop', function() {
            shop.close();
            let canEnterIntoShop = person.canEnterIntoShop;
            assert.equal(false, canEnterIntoShop);
        });
    });
});