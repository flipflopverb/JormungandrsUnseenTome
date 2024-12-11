//initial values and variables and arrays
var tempo = []
var scaleArray = []
var chordArrayAll = []
var chordArrayMajor = []
var chordArrayMinor = []
var scaleOptionsForThisSong = []
var thisSongsNotesAre = []
var thisSongsChordChoicesAre = []
var primaryChordProgression = []
var primaryChordProgDisplay = []
var secondaryChordProgression = []
var secondaryChordProgDisplay = []
var bridgeChordProgression = []
var bridgeChordProgDisplay = []

var newTempo
var numberOfSections
var thisSongsScaleIs

const tempoOutput = document.getElementById("tempoDisplay")
const numberOfSectionsOutput = document.getElementById("numberOfSectionsDisplay")
const scaleDisplay = document.getElementById("scaleDisplay")
const scaleNotesDisplay = document.getElementById("scaleNotesDisplay")
const chordDisplay = document.getElementById("chordDisplay")

const scaleTypeChoice = document.getElementById("scaleType")
const scaleClassChoice = document.getElementById("scaleClass")
const scaleLengthChoice = document.getElementById("scaleLength")

const progressionChordChoices1 = document.getElementById("progressionChordChoices1")



//all the Tempo Stuff
var sliderHigh = document.getElementById("tempoHigh"); // Display the tempo high slider value
var outputHigh = document.getElementById("tempoHighDisplay");
outputHigh.innerHTML = sliderHigh.value;
var tempoHigh = sliderHigh.value;

var sliderLow = document.getElementById("tempoLow"); // Display the tempo low slider value
var outputLow = document.getElementById("tempoLowDisplay");
outputLow.innerHTML = sliderLow.value;
var tempoLow = sliderLow.value;

var sliderSongLength = document.getElementById("songLength"); // Display the song length slider value
var outputSongLength = document.getElementById("songLengthDisplay");
outputSongLength.innerHTML = sliderSongLength.value;
var songLength = sliderSongLength.value;

sliderHigh.oninput = function() { //make the sliders update the html to reflect changes
    outputHigh.innerHTML = this.value;
}
sliderLow.oninput = function() {
    outputLow.innerHTML = this.value;
}
sliderSongLength.oninput = function() {
    outputSongLength.innerHTML = this.value;
}



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
const scale1 = new ScaleObject('Natural Major',[0,2,4,5,7,9,11],'Heptatonic','Traditional', 'Major')
const scale2 = new ScaleObject('Natural Minor',[0,2,3,5,7,8,10],'Heptatonic','Traditional', 'Minor')
const scale3 = new ScaleObject('Harmonic Minor', [0,2,3,5,7,8,11],'Heptatonic','nonstandard', 'Minor')
const scale4 = new ScaleObject('Melodic Minor',[0,2,3,5,7,9,11],'Heptatonic','nonstandard', 'Minor')
const scale5 = new ScaleObject('Major Pentatonic', [0,2,4,7,9],'Pentatonic', 'nonstandard','Major')
const scale6 = new ScaleObject('Minor Pentatonic', [0,3,5,7,10],'Pentatonic', 'nonstandard','Minor')



//chord progressions
function ChordObject(chordCategory, chordRomanSymbol, chordDegree, chordIntervals, chordDensity, chordClass, chordScale, chordSubScale){
 this.chordCategory = chordCategory
 this.chordRomanSymbol = chordRomanSymbol
 this.chordDegree = chordDegree
 this.chordIntervals = chordIntervals
 this.chordDensity = chordDensity
 this.chordClass = chordClass
 this.chordScale = chordScale
 this.chordSubScale = chordSubScale
 chordArrayAll.push(this)
}

const chord1 = new ChordObject('Major Triad','I', 'Tonic', [0, 2, 4], 3, 'Traditional', 'Major', 'Natural')
const chord2 = new ChordObject('Minor Triad','ii', 'Supertonic', [1, 3, 5], 3, 'Traditional', 'Major', 'Natural')
const chord3 = new ChordObject('Minor Triad','iii', 'Mediant', [2, 4, 6], 3, 'Traditional', 'Major', 'Natural')
const chord4 = new ChordObject('Major Triad','IV', 'Subdominant', [4, 6, 0], 3, 'Traditional', 'Major', 'Natural')
const chord5 = new ChordObject('Major Triad','V', 'Dominant', [5, 7, 1], 3, 'Traditional', 'Major', 'Natural')
const chord6 = new ChordObject('Minor Triad','vi', 'Submediant', [6, 0, 2], 3, 'Traditional', 'Major', 'Natural')
const chord7 = new ChordObject('Diminished Triad','vii°', 'Leading Tone', [7, 1, 3], 3, 'Traditional', 'Major', 'Natural')

const chord8 = new ChordObject('Minor Triad','i', 'Tonic', [0, 2, 4], 3, 'Traditional', 'Minor', 'Natural')
const chord9 = new ChordObject('Diminished Triad','ii°', 'Supertonic', [1, 3, 5], 3, 'Traditional', 'Minor', 'Natural')
const chord10 = new ChordObject('Major Triad','III', 'Mediant', [2, 4, 6], 3, 'Traditional', 'Minor', 'Natural')
const chord11 = new ChordObject('Minor Triad','iv', 'Subdominant', [4, 6, 0], 3, 'Traditional', 'Minor', 'Natural')
const chord12 = new ChordObject('Minor Triad','v', 'Dominant', [5, 7, 1], 3, 'Traditional', 'Minor', 'Natural')
const chord13 = new ChordObject('Major Triad','VI', 'Submediant', [6, 0, 2], 3, 'Traditional', 'Minor', 'Natural')
const chord14 = new ChordObject('Major Triad','VII', 'Subtonic', [7, 1, 3], 3, 'Traditional', 'Minor', 'Natural')

const chord15 = new ChordObject('Minor Triad','i', 'Tonic', [0, 2, 4], 3, 'nonstandard', 'Minor', 'Harmonic')
const chord16 = new ChordObject('Diminished Triad','ii°', 'Supertonic', [1, 3, 5], 3, 'nonstandard', 'Minor', 'Harmonic')
const chord17 = new ChordObject('Augmented Triad','III⁺', 'Mediant', [2, 4, 6], 3, 'nonstandard', 'Minor', 'Harmonic')
const chord18 = new ChordObject('Minor Triad','iv', 'Subdominant', [4, 6, 0], 3, 'nonstandard', 'Minor', 'Harmonic')
const chord19 = new ChordObject('Major Triad','V', 'Dominant', [5, 7, 1], 3, 'nonstandard', 'Minor', 'Harmonic')
const chord20 = new ChordObject('Major Triad','VI', 'Submediant', [6, 0, 2], 3, 'nonstandard', 'Minor', 'Harmonic')
const chord21 = new ChordObject('Diminished Triad','vii°', 'Subtonic', [7, 1, 3], 3, 'nonstandard', 'Minor', 'Harmonic')

const chord22 = new ChordObject('Minor Triad','i', 'Tonic', [0, 2, 4], 3, 'nonstandard', 'Minor', 'Melodic')
const chord23 = new ChordObject('Minor Triad','ii', 'Supertonic', [1, 3, 5], 3, 'nonstandard', 'Minor', 'Melodic')
const chord24 = new ChordObject('Augmented Triad','III⁺', 'Mediant', [2, 4, 6], 3, 'nonstandard', 'Minor', 'Melodic')
const chord25 = new ChordObject('Major Triad','IV', 'Subdominant', [4, 6, 0], 3, 'nonstandard', 'Minor', 'Melodic')
const chord26 = new ChordObject('Major Triad','V', 'Dominant', [5, 7, 1], 3, 'nonstandard', 'Minor', 'Melodic')
const chord27 = new ChordObject('Diminished Triad','vi°', 'Submediant', [6, 0, 2], 3, 'nonstandard', 'Minor', 'Melodic')
const chord28 = new ChordObject('Diminished Triad','vii°', 'Subtonic', [7, 1, 3], 3, 'nonstandard', 'Minor', 'Melodic')


var chordCountSection1 = document.getElementById("chordCountSection1"); // Display the chord count slider value
var outputChordCount1 = document.getElementById("outputChordCountDisplay1");
outputChordCount1.innerHTML = chordCountSection1.value;

chordCountSection1.oninput = function() { //make the chord count slider update
    outputChordCount1.innerHTML = this.value;
    
}

var chordCountSection2 = document.getElementById("chordCountSection2"); // Display the chord count slider value
var outputChordCount2 = document.getElementById("outputChordCountDisplay2");
outputChordCount2.innerHTML = chordCountSection2.value;

chordCountSection2.oninput = function() { //make the chord count slider update
    outputChordCount2.innerHTML = this.value;
    
}

var chordCountSection3 = document.getElementById("chordCountSection3"); // Display the chord count slider value
var outputChordCount3 = document.getElementById("outputChordCountDisplay3");
outputChordCount3.innerHTML = chordCountSection3.value;

chordCountSection3.oninput = function() { //make the chord count slider update
    outputChordCount3.innerHTML = this.value;
    
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
    scaleOptionsForThisSong = []

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
            thisSongsScaleIs = scaleOptionsForThisSong[scaleIndex]

            scaleInt = scaleOptionsForThisSong[scaleIndex].scaleInterval
            scaleDisplay.innerHTML = (thisSongsKeyIs + " " + thisSongsScaleIs.scaleName)

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

    function getChords(){
        primaryChordProgression = []
        primaryChordProgDisplay = []
        secondaryChordProgression = []
        secondaryChordProgDisplay = []
        bridgeChordProgression = []
        bridgeChordProgDisplay = []
        thisSongsChordChoicesAre = []
        //console.log(chordArrayAll[20].chordSubScale + " " + chordArrayAll[20].chordScale, thisSongsScaleIs.scaleName)
        for(let i = 0; i < chordArrayAll.length; i++){
            if((chordArrayAll[i].chordSubScale + " " + chordArrayAll[i].chordScale) === thisSongsScaleIs.scaleName){
                thisSongsChordChoicesAre.push(chordArrayAll[i])
            }
        }
        console.log(thisSongsChordChoicesAre)
        for(let i = 0; i < chordCountSection1.value;){
            var num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
            if(i === 0){
                primaryChordProgression.push(thisSongsChordChoicesAre[num])
                primaryChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            }else if(thisSongsChordChoicesAre[num] !== primaryChordProgression[i-1]){
                primaryChordProgression.push(thisSongsChordChoicesAre[num])
                primaryChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            } else{}
        }

        for(let i = 0; i < chordCountSection2.value;){
            var num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
            if(i === 0){
                secondaryChordProgression.push(thisSongsChordChoicesAre[num])
                secondaryChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            }else if(thisSongsChordChoicesAre[num] !== secondaryChordProgression[i-1]){
                secondaryChordProgression.push(thisSongsChordChoicesAre[num])
                secondaryChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            } else{}
        }

        for(let i = 0; i < chordCountSection3.value;){
            var num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
            if(i === 0){
                bridgeChordProgression.push(thisSongsChordChoicesAre[num])
                bridgeChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            }else if(thisSongsChordChoicesAre[num] !== bridgeChordProgression[i-1]){
                bridgeChordProgression.push(thisSongsChordChoicesAre[num])
                bridgeChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            } else{}
        }
        
           
        chordDisplay.innerHTML = (primaryChordProgDisplay + ' | ' + secondaryChordProgDisplay  + ' | ' + bridgeChordProgDisplay)
    }

    
getTempoInRange()
getnumberOfSections()
getScale()
getChords()

