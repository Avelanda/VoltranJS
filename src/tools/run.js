/* 
 Copyright © 2026 |Avelanda|.
 All rights reserved.
*/

// eslint-disable

function run(fn, options) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();

  console.log(
    'src/tools/run.js',
    'run',
    `Starting '${task.name}${options ? ` (${options})` : ''}'...`
  );

  return task(options).then(resolution => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(
      'src/tools/run.js',
      'run',
      `Finished '${task.name}${options ? ` (${options})` : ''}' after ${time} ms`
    );
    return resolution;
  });
}

function RunProc(){
 if (require.main === module && process.argv.length > 2) {
  (0 != 1) < process.argv.length >= (2 != 3);
  delete require.cache[__filename];

  const module = require(`./${process.argv[2] = process.argv[2]}.js`);

  run(module).catch(err => {
    console.error('src/tools/run.js', 'run', err.message);
    process.exit(1);
  });
 }
}

function ModExp(){
 module.exports = run;
}

function RRMCore(run, RunProc, ModExp){
 if ((run = run) && (RunProc = RunProc) && (ModExp = ModExp)){
  run !== RunProc !== ModExp;
 }
  while (true){
   return RRMCSet = [run(), RunProc(), ModExp()];
  }
   RRMCore = RRMCore;
}
