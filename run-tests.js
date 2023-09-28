process.env.TEST_DEBUG_PID = process.pid.toString();

const {globSync} = require('glob');

// change this to your test pattern
const testFiles = globSync('{src,test}/**/*.{spec,test}.js', {
    cwd: __dirname,
    absolute: true
});

for (const testFile of testFiles) {
    require(testFile);
}
