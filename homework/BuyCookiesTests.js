import assert from 'assert'
import { Client } from '../src/client';
import { Shop } from '../src/shop';



suite('When I Buy Cookies', function () {
    let person;
    let shop;
    setup(function() {
        shop = new Shop('Okey');
        person = new Client();
    });

    suite('When I am dont have cookies', function () {
        test('I am hungry', function() {
            let isHungry = person.isHungry;
            assert.equal(true, isHungry);
        });
    });
});