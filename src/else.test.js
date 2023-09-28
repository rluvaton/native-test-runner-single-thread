const {describe, it} = require('node:test');
const {assertSameProcess} = require("../test/assert-same-process");

describe('other describe 1', () => {
    describe('other describe 2', () => {
        describe('other describe 3', () => {
            it('should also work 1', () => {
                assertSameProcess();
            });

            it('should also work 2', () => {
                assertSameProcess();
            });

            it('should also work 3', () => {
                assertSameProcess();
            });
        });
    });
});
