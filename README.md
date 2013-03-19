SoundFontJS
===========

Node JS CLI for creating MIDI.JS ready sound fonts. The tool converts high quality wav files to sound font js files compatible with [MIDI.js](https://github.com/mudcube/MIDI.js). It allows the use of PRO DAWs like Logic, Cubase etc. to create nicer sounds without the of sound font files.

##Dependencies:

Make sure you have the following dependencies installed on your system.

- [oggenc](http://www.rarewares.org/ogg-oggenc.php) 
- [lame](http://lame.sourceforge.net/)

##Setup

`npm install sfjs -g`

##Usage

`sfjs`
By default the program will look for a font.wav file in CWD and output the files in CWD/build/. The default GM output instrument is acoustic_grand_piano.

The source audio file should be a high quality PCM encoded .wav file. 
It contains all the notes of a instrument in 2 second intervals.
The lowest note should start at A-1 and continue 8 octaves.

Options:

    -h, --help          output usage information
    -s --source <path>  source audio file
    -b --build <path>   build directory defaults to "build"
    -l --min <int>      minimum bit rate defaults to 64 Kbit/sec
    -h --max <int>      maximum bit rate defaults to 128 Kbit/sec
    -o --out <name>     output instrument name defaults "acoustic_grand_piano"
    



