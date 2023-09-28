process.env.TEST_DEBUG_PID = process.pid.toString();

const {run} = require('node:test');
const {spec: Spec} = require('node:test/reporters');
const {compose} = require('node:stream');
const {globSync} = require('glob');


// change this to your test pattern
const testFiles = globSync('{src,test}/**/*.{spec,test}.js', {
    cwd: __dirname,
    absolute: true
});

run({
    files: testFiles,
})
    .compose(new Spec())
    .pipe(process.stdout);
