const {it} = require('node:test');
const {assertSameProcess} = require("../test/assert-same-process");

it('global test 1', () => {
    assertSameProcess();
});

it('global test 2', () => {
    assertSameProcess();
});
