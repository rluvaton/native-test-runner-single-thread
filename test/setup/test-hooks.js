const { before, after, beforeEach, afterEach } = require('node:test');
const assert = require("node:assert");
const {assertSameProcess} = require("../assert-same-process");

before(async () => {
    assertSameProcess();
});

after(async () => {
    assertSameProcess();
});

beforeEach(async () => {
    assertSameProcess();
});

afterEach(async () => {
    assertSameProcess();
});
