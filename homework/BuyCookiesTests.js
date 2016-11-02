import assert from 'assert'
import { Client } from '../src/client';
import { Shop } from '../src/shop';



suite('When I Buy Cookies', function () {
    let person;
    let shop;
    setup(function() {
        shop = new Shop('Okey',true,{'cookies':8});
        person = new Client(shop,10);
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

        suite('When I have some money', function () {
            test('I can buy something', function() {
                let canBuyCookies = person.canBuyCookies;
                assert.equal(true, canBuyCookies);
            });
        });

        suite('When I have enough money (10) for cookies', function () {
            test('I can buy cookies', function() {
                let sellResult = person.buy('cookies');
                assert.equal(true, sellResult);
            });
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