var exec = require('child_process').exec;
var fs = require('fs');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('PUBLIC API', function(){

  it('should not find the source file', function(done){
      exec('./bin/sfjs -p', function(err, stdout, stderr) {
        expect(stderr).toContain('[SoundFontJS] Error: Source file not found.')
        done();
      })
  });

  it('should compile the example project to example/acoustic_grand_piano', function(done){
      exec('./bin/sfjs -s example/font.wav -b example/ -p', function(err, stdout, stderr) {
        expect(fs.existsSync('example/acoustic_grand_piano')).toBe(true);
        expect(fs.existsSync('example/acoustic_grand_piano/acoustic_grand_piano-ogg.js')).toBe(true);
        expect(fs.existsSync('example/acoustic_grand_piano/acoustic_grand_piano-mp3.js')).toBe(true);
        done();
      })
  });

});