SoundFontJS
===========

Node JS CLI for creating MIDI.JS ready sound fonts. The tool converts high quality wav files to sound font js files compatible with [MIDI.js](https://github.com/mudcube/MIDI.js). It allows the use of Pro DAWs like Logic, Cubase etc. to create nicer sounds than what sound font synths can produce.

##Dependencies:

Make sure you have the following dependencies installed on your system.

- [oggenc](http://www.rarewares.org/ogg-oggenc.php) 
- [lame](http://lame.sourceforge.net/)

##Setup

`npm install sfjs -g`

##Usage

Run `ulimit -n 10000` to prevent memory allocation issues.

Run `sfjs`.
By default the program will look for a font.wav file in CWD and output the files in CWD/acoustic_grand_piano/. The default GM output instrument is acoustic_grand_piano.

The source audio file should be a high quality PCM encoded .wav file. 
It contains all the notes of a instrument in 2 second intervals.
The lowest note should start at A-1 and continue 8 octaves.

Options:

    -h, --help          output usage information
    -p --progress       hide progress bar defaults to false
    -s --source <path>  source audio file
    -o --output <name>  output instrument name defaults "acoustic_grand_piano"
    -b --build <path>   build directory defualts to CWD
    -l --min <int>      minimum bit rate defaults to 64 Kbit/sec
    -h --max <int>      maximum bit rate defaults to 128 Kbit/sec
    



