const assert = require("node:assert");

module.exports = {
    assertSameProcess() {
        // we set the TEST_DEBUG_PID environment variable in run-tests.js when coming from single thread
        // or regular-run-tests.js when coming from multi threads
        assert.strictEqual(process.env.TEST_DEBUG_PID, process.pid.toString(), `not running in single thread (process who started the test: ${process.env.TEST_DEBUG_PID}, current process: ${process.pid})`);
    }
}
