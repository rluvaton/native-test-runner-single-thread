const {describe, it} = require('node:test');
const {assertSameProcess} = require("../test/assert-same-process");

describe('some describe 1', () => {
    describe('some describe 2', () => {
        describe('some describe 3', () => {
            it('should work 1', () => {
                assertSameProcess();
            });

            it('should work 2', () => {
                assertSameProcess();
            });

            it('should work 3', () => {
                assertSameProcess();
            });
        });
    });
});
