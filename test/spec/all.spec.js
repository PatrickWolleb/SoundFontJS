var exec = require('child_process').exec;

describe('Test PUBLIC API', function(){

  it('checks output', function(done){
      exec('./bin/sfjs -s ../example/font.wav', function(err, stdout, stderr) {
        //console.log('stdout', err);
        console.log('stdout', stdout);
        console.log('stderr', stderr);
        done();
      })
  });

  // it('shows asynchronous test', function(){
  //   setTimeout(function(){
  //     expect('second').toEqual('second');
  //     asyncSpecDone();
  //   }, 1);
  //   expect('first').toEqual('first');
  //   asyncSpecWait();
  // });

  // it('shows asynchronous test node-style', function(done){
  //   setTimeout(function(){
  //     expect('second').toEqual('second');
  //     // If you call done() with an argument, it will fail the spec 
  //     // so you can use it as a handler for many async node calls
  //     done();
  //   }, 1);
  //   expect('first').toEqual('first');
  // });
});