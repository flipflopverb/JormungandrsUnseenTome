//initial values and variables and arrays
var tempo = []
var scaleArray = []
var chordArrayAll = []
var chordArrayMajor = []
var chordArrayMinor = []
const tempoOutput = document.getElementById("tempoDisplay")
const numberOfSectionsOutput = document.getElementById("numberOfSectionsDisplay")
const scaleDisplay = document.getElementById("scaleDisplay")
const scaleNotesDisplay = document.getElementById("scaleNotesDisplay")
const scaleTypeChoice = document.getElementById("scaleType")
const scaleClassChoice = document.getElementById("scaleClass")
const scaleLengthChoice = document.getElementById("scaleLength")
var newTempo
var numberOfSections
var thisSongsScaleIs
var thisSongsNotesAre 

//chromatic note objects and note arrays
var twelveTET = ['C', 'C#', 'D','D#','E','F','F#','G','G#','A','A#','B']
var twelveTETMod
var twelveTETindex




//scale objects and scale interval arrays
function ScaleObject(scaleName, scaleInterval, scaleLength, scaleClass, scaleType){
    this.scaleName = scaleName
    this.scaleInterval = scaleInterval
    this.scaleLength = scaleLength
    this.scaleClass = scaleClass
    this.scaleType = scaleType
    scaleArray.push(this)
} 
const scale1 = new ScaleObject('Major',[0,2,4,5,7,9,11],'Heptatonic','Traditional', 'Major')
const scale2 = new ScaleObject('Natural Minor',[0,2,3,5,7,8,10],'Heptatonic','Traditional', 'Minor')
const scale3 = new ScaleObject('Harmonic Minor', [0,2,3,5,7,8,11],'Heptatonic','nonstandard', 'Minor')
const scale4 = new ScaleObject('Melodic Minor',[0,2,3,5,7,9,11],'Heptatonic','nonstandard', 'Minor')
const scale5 = new ScaleObject('Major Pentatonic', [0,2,4,7,9],'Pentatonic', 'nonstandard','Major')
const scale6 = new ScaleObject('Minor Pentatonic', [0,3,5,7,10],'Pentatonic', 'nonstandard','Minor')
//const userScale1 = ('customUserScaleName1' ,[0, 1, 2, 3, 4, 5, 6])


//chord progressions
function ChordObject(chordCategory, chordRomanSymbol, chordDegree, chordIntervals, chordDensity, chordClass, chordScale){
 this.chordCategory = chordCategory
 this.chordRomanSymbol = chordRomanSymbol
 this.chordDegree = chordDegree
 this.chordIntervals = chordIntervals
 this.chordDensity = chordDensity
 this.chordClass = chordClass
 this.chordScale = chordScale
 chordArrayAll.push(this)
}

const chord1 = new ChordObject('Major Triad','I', 'Tonic', [0, 2, 4], 3, 'Traditional', 'Major')
const chord2 = new ChordObject('Minor Triad','ii', 'Supertonic', [1, 3, 5], 3, 'Traditional', 'Major')
const chord3 = new ChordObject('Minor Triad','iii', 'Mediant', [2, 4, 6], 3, 'Traditional', 'Major')
const chord4 = new ChordObject('Major Triad','IV', 'Subdominant', [4, 6, 0], 3, 'Traditional', 'Major')
const chord5 = new ChordObject('Major Triad','V', 'Dominant', [5, 7, 1], 3, 'Traditional', 'Major')
const chord6 = new ChordObject('Minor Triad','vi', 'Submediant', [6, 0, 2], 3, 'Traditional', 'Major')
const chord7 = new ChordObject('Diminished Triad','vii°', 'Submediant', [7, 1, 3], 3, 'Traditional', 'Major')

const chord8 = new ChordObject('Minor Triad','i', 'Tonic', [0, 2, 4], 3, 'Traditional', 'Minor')
const chord9 = new ChordObject('Diminished Triad','ii°', 'Supertonic', [1, 3, 5], 3, 'Traditional', 'Minor')
const chord10 = new ChordObject('Major Triad','III', 'Mediant', [2, 4, 6], 3, 'Traditional', 'Minor')
const chord11 = new ChordObject('Minor Triad','iv', 'Subdominant', [4, 6, 0], 3, 'Traditional', 'Minor')
const chord12 = new ChordObject('Minor Triad','v', 'Dominant', [5, 7, 1], 3, 'Traditional', 'Minor')
const chord13 = new ChordObject('Major Triad','VI', 'Submediant', [6, 0, 2], 3, 'Traditional', 'Minor')
const chord14 = new ChordObject('Major Triad','VII', 'Submediant', [7, 1, 3], 3, 'Traditional', 'Minor')


// Display the tempo high slider value
var sliderHigh = document.getElementById("tempoHigh");
var outputHigh = document.getElementById("tempoHighDisplay");
outputHigh.innerHTML = sliderHigh.value;
var tempoHigh = sliderHigh.value;
// Display the tempo low slider value
var sliderLow = document.getElementById("tempoLow");
var outputLow = document.getElementById("tempoLowDisplay");
outputLow.innerHTML = sliderLow.value;
var tempoLow = sliderLow.value;
// Display the song length slider value
var sliderSongLength = document.getElementById("songLength");
var outputSongLength = document.getElementById("songLengthDisplay");
outputSongLength.innerHTML = sliderSongLength.value;
var songLength = sliderSongLength.value;
//make the sliders update the html to reflect changes
sliderHigh.oninput = function() {
    outputHigh.innerHTML = this.value;
}
sliderLow.oninput = function() {
    outputLow.innerHTML = this.value;
}
sliderSongLength.oninput = function() {
    outputSongLength.innerHTML = this.value;
}

















//these functions get triggered when they click the generate song button
function getTempoInRange(low, high) {
    tempoHigh = sliderHigh.value; //set var equal to slider
    tempoLow = sliderLow.value;
    tempo = [] //clear old value
    tempo.push(tempoLow)
    tempo.push(tempoHigh)
    tempo.sort((a, b) => a - b);// sort the values, just in case they pick a weird range

    high = tempo[1]; // get the high and low numbers
    low = tempo[0];
    
    newTempo = Math.floor((Math.random()*(Number(high)-Number(low)+1))+Number(low)); // The maximum is inclusive and the minimum is inclusive
    tempoOutput.innerHTML = newTempo;
  }

  function getnumberOfSections(){
        numberOfSections = Math.round((sliderSongLength.value * newTempo)/(960))
        numberOfSectionsOutput.innerHTML = numberOfSections
  }

  function getScale(){
    var scaleOptionsForThisSong = []

    for (let i = 0; i < scaleArray.length; i++){
        if( ((scaleTypeChoice.value === 'Any') || (scaleArray[i].scaleType === scaleTypeChoice.value)) &&
            ((scaleClassChoice.value === 'Any') || (scaleArray[i].scaleClass === scaleClassChoice.value)) && 
            ((scaleLengthChoice.value === 'Any') || (scaleArray[i].scaleLength === scaleLengthChoice.value)))
            { 
            scaleOptionsForThisSong.push(scaleArray[i])
            

        } else {
            
        }
    } 

    if(scaleOptionsForThisSong.length !== 0){
        a = twelveTET.length
        b = scaleOptionsForThisSong.length
        
        keyIndex = Math.floor(Math.random()*Number(a))
        scaleIndex = Math.floor(Math.random()*Number(b))
        thisSongsKeyIs = twelveTET[keyIndex]
        thisSongsScaleIs = scaleOptionsForThisSong[scaleIndex].scaleName

        scaleInt = scaleOptionsForThisSong[scaleIndex].scaleInterval
        scaleDisplay.innerHTML = (thisSongsKeyIs + " " + thisSongsScaleIs)

        twelveTETindex = twelveTET.indexOf(thisSongsKeyIs)
        twelveTETMod = []
        thisSongsNotesAre = []

        for (let i = twelveTETindex; i < twelveTET.length; i++){
            twelveTETMod.push(twelveTET[i])
        }

        for (let i = 0; i < twelveTETindex; i++){
            twelveTETMod.push(twelveTET[i])
        }

        for (i in scaleInt) {
            thisSongsNotesAre.push(twelveTETMod[scaleInt[i]]);
        }
        scaleNotesDisplay.innerHTML = (thisSongsNotesAre)
    }
    else{
        scaleNotesDisplay.innerHTML = 'invalid combo for scale, please choose again.'
    }

    
  }

getTempoInRange()
getnumberOfSections()
getScale()














// Display the tempo high slider value
var sliderHigh = document.getElementById("tempoHigh");
var outputHigh = document.getElementById("tempoHighDisplay");
outputHigh.innerHTML = sliderHigh.value;
var tempoHigh = sliderHigh.value;
// Display the tempo low slider value
var sliderLow = document.getElementById("tempoLow");
var outputLow = document.getElementById("tempoLowDisplay");
outputLow.innerHTML = sliderLow.value;
var tempoLow = sliderLow.value;
// Display the song length slider value
var sliderSongLength = document.getElementById("songLength");
var outputSongLength = document.getElementById("songLengthDisplay");
outputSongLength.innerHTML = sliderSongLength.value;
var songLength = sliderSongLength.value;
//make the sliders update the html to reflect changes
sliderHigh.oninput = function() {
    outputHigh.innerHTML = this.value;
}
sliderLow.oninput = function() {
    outputLow.innerHTML = this.value;
}
sliderSongLength.oninput = function() {
    outputSongLength.innerHTML = this.value;
}

















//these functions get triggered when they click the generate song button
function getTempoInRange(low, high) {
    tempoHigh = sliderHigh.value; //set var equal to slider
    tempoLow = sliderLow.value;
    tempo = [] //clear old value
    tempo.push(tempoLow)
    tempo.push(tempoHigh)
    tempo.sort((a, b) => a - b);// sort the values, just in case they pick a weird range

    high = tempo[1]; // get the high and low numbers
    low = tempo[0];

    const minCeiled = Math.ceil(high);
    const maxFloored = Math.floor(low);
    newTempo = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    tempoOutput.innerHTML = newTempo;
  }

  function getnumberOfSections(){
        numberOfSections = Math.round((sliderSongLength.value * newTempo)/(960))
        numberOfSectionsOutput.innerHTML = numberOfSections
  }

  function getScale(){
    a = scaleArray.length
    const minCeiled = Math.ceil(a);
    const maxFloored = Math.floor(0);
    scaleIndex = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    thisSongsScaleIs = scaleArray[scaleIndex].name
    scaleDisplay.innerHTML = thisSongsScaleIs
  }

getTempoInRange()
getnumberOfSections()
getScale()
