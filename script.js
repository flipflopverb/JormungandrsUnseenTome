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
var bassPatternArrayAll = []
var bassPatternGroupArray = []
var bassPatternNamesArray = []
var kickPatternArrayAll = []
var leadPatternArrayAll = []
var modulationArrayAll = []

let bassPrimaryPattern
let bassSecondaryPattern
let bassBridgePattern
let kickPrimaryPattern
let kickSecondaryPattern
let kickBridgePattern
let leadPrimaryPattern
let leadSecondaryPattern
let leadBridgePattern
let modulationPrimary
let modulationSecondary
let modulationBridge

var newTempo
var numberOfSections
var thisSongsScaleIs

const tempoOutput = document.getElementById("tempoDisplay")
const numberOfSectionsOutput = document.getElementById("numberOfSectionsDisplay")
const scaleDisplay = document.getElementById("scaleDisplay")
const scaleNotesDisplay = document.getElementById("scaleNotesDisplay")
const chordDisplay = document.getElementById("chordDisplay")
const bassPatternDisplay = document.getElementById('bassPatternDisplay')
const kickPatternDisplay = document.getElementById('kickPatternDisplay')
const leadPatternDisplay = document.getElementById('leadPatternDisplay')
const leadPlusPatternDisplay = document.getElementById('leadPlusPatternDisplay')


const scaleTypeChoice = document.getElementById("scaleType")
const scaleClassChoice = document.getElementById("scaleClass")
const scaleLengthChoice = document.getElementById("scaleLength")
const progressionChordChoices1 = document.getElementById("progressionChordChoices1")
const bassPatternGroupChoice1 = document.getElementById("bassPatternGroupChoice1")
const bassPatternGroupChoice2 = document.getElementById("bassPatternGroupChoice2")
const bassPatternGroupChoice3 = document.getElementById("bassPatternGroupChoice3")
const kickPatternGroupChoice1 = document.getElementById('kickPatternGroupChoice1')
const kickPatternGroupChoice2 = document.getElementById('kickPatternGroupChoice2')
const kickPatternGroupChoice3 = document.getElementById('kickPatternGroupChoice3')
const leadPatternGroupChoice1 = document.getElementById('leadPatternGroupChoice1')
const leadPatternGroupChoice2 = document.getElementById('leadPatternGroupChoice2')
const leadPatternGroupChoice3 = document.getElementById('leadPatternGroupChoice3')
const modulationTypeChoice1 = document.getElementById('modulationTypeChoice1')
const modulationTypeChoice2 = document.getElementById('modulationTypeChoice2')
const modulationTypeChoice3 = document.getElementById('modulationTypeChoice3')


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


//Bass stuff
function BassPatternObject(bassPatternName, bassPatternGroup){
    this.bassPatternName = bassPatternName
    this.bassPatternGroup = bassPatternGroup
    bassPatternArrayAll.push(this)
   }

const bassPattern1 = new BassPatternObject('Dubstep', 'Chaotic')
const bassPattern2 = new BassPatternObject('Dubinato', 'Chaotic')
const bassPattern3 = new BassPatternObject('Stop n Go', 'Melodic')
const bassPattern4 = new BassPatternObject('Melodic', 'Melodic')
const bassPattern5 = new BassPatternObject('Kick Syncopated', 'Driving')
const bassPattern6 = new BassPatternObject('Seq/Arp', 'Driving')
const bassPattern7 = new BassPatternObject('Ostinato', 'Driving')
const bassPattern8 = new BassPatternObject('Hold n Pump', 'Driving')
const bassPattern9 = new BassPatternObject('Klaxon', 'Alarm')
const bassPattern10 = new BassPatternObject('Decay Pad', 'Alarm')

//Kick Stuff
function KickPatternObject(kickPatternName, kickPatternGroup){
    this.kickPatternName = kickPatternName
    this.kickPatternGroup = kickPatternGroup
    kickPatternArrayAll.push(this)
    }
    
const kickPattern1 = new KickPatternObject('DnB', 'Chaos')
const kickPattern2 = new KickPatternObject('Latin', 'Pump')
const kickPattern3 = new KickPatternObject('Heart', 'Pump')
const kickPattern4 = new KickPatternObject('4OTF', 'Driving')
const kickPattern5 = new KickPatternObject('Hip Hop >6 Hits', 'Funky')
const kickPattern6 = new KickPatternObject('Hip Hop 5 to 6 Hits', 'Funky')
const kickPattern7 = new KickPatternObject('Hip Hop 3 to 4 Hits', 'Funky')
const kickPattern8 = new KickPatternObject('Hip Hop 1 to 2 Hits', 'Funky')


//Lead stuff
function LeadPatternObject(leadPatternName, leadPatternGroup){
    this.leadPatternName = leadPatternName
    this.leadPatternGroup = leadPatternGroup
    leadPatternArrayAll.push(this)
   }

const leadPattern1 = new LeadPatternObject('Constant', 'Driving')
const leadPattern2 = new LeadPatternObject('Syncopated', 'Syncopated')
const leadPattern3 = new LeadPatternObject('Seq/Arp', 'Down beat')
const leadPattern4 = new LeadPatternObject('Sync Rest', 'Syncopated')
const leadPattern5 = new LeadPatternObject('Fast n Rest', 'Down beat')
const leadPattern6 = new LeadPatternObject('Long Drawn', 'Driving')

//Modulation stuff
function ModulationObject(modulationName, modulationType, modulationClass){
this.modulationName = modulationName
this.modulationType = modulationType
this.modulationClass = modulationClass
modulationArrayAll.push(this)
}

const modulation1 = new ModulationObject('Ascent', 'Directional', 'Any')
const modulation2 = new ModulationObject('Descent', 'Directional', 'Any')
const modulation3 = new ModulationObject('Melodic', 'Directional', 'Melody')
const modulation4 = new ModulationObject('Chord', 'Directional', 'Any')
const modulation5 = new ModulationObject('None', 'None', 'Any')


















//the below functions get triggered when they click the generate song button
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

    // the method I used for pulling bass patterns is so much better than the above systems. I need to rebuild a lot of stuff.
    function getBassPatterns(){

        let num

        if(bassPatternGroupChoice1.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            bassPrimaryPattern = (bassPatternArrayAll[num])
        } else if(bassPatternGroupChoice1.value !== 'Any'){
            let bassPatternsOfChoiceGroup = bassPatternArrayAll.filter((a) => a.bassPatternGroup === bassPatternGroupChoice1.value)
            num4 = Math.floor(Math.random()*bassPatternsOfChoiceGroup.length)
            bassPrimaryPattern = (bassPatternsOfChoiceGroup[num4])
        }

        if(bassPatternGroupChoice2.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            bassSecondaryPattern = (bassPatternArrayAll[num])
                while(bassSecondaryPattern.bassPatternGroup === bassPrimaryPattern.bassPatternGroup){
                    num = Math.floor(Math.random()*leadPatternArrayAll.length)
                    bassSecondaryPattern = (bassPatternArrayAll[num])
                    }
        } else if(bassPatternGroupChoice2.value !== 'Any'){
            let bassPatternsOfChoiceGroup = bassPatternArrayAll.filter((a) => a.bassPatternGroup === bassPatternGroupChoice2.value)
            num = Math.floor(Math.random()*bassPatternsOfChoiceGroup.length)
            bassSecondaryPattern = (bassPatternsOfChoiceGroup[num])
                while(bassSecondaryPattern.bassPatternGroup === bassPrimaryPattern.bassPatternGroup){
                num = Math.floor(Math.random()*bassPatternsOfChoiceGroup.length)
                bassSecondaryPattern = (bassPatternsOfChoiceGroup[num])
                }
        }

        if(bassPatternGroupChoice3.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            bassBridgePattern = (bassPatternArrayAll[num])
        } else if(bassPatternGroupChoice3.value !== 'Any'){
            let bassPatternsOfChoiceGroup = bassPatternArrayAll.filter((a) => a.bassPatternGroup === bassPatternGroupChoice3.value)
            num = Math.floor(Math.random()*bassPatternsOfChoiceGroup.length)
            bassBridgePattern = (bassPatternsOfChoiceGroup[num])
        }

        if(bassPrimaryPattern === bassSecondaryPattern){
            console.log('BAD')
        }
            bassPatternDisplay.innerHTML = (bassPrimaryPattern.bassPatternName + ' | ' + bassSecondaryPattern.bassPatternName + ' | ' + bassBridgePattern.bassPatternName)
        
    }

    function getKickPatterns(){

        let num

        if(kickPatternGroupChoice1.value === 'Any'){
            num = Math.floor(Math.random()*kickPatternArrayAll.length)
            kickPrimaryPattern = (kickPatternArrayAll[num])
        } else if(kickPatternGroupChoice1.value === 'NotFunky'){
            let kickPatternsOfChoiceGroup = kickPatternArrayAll.filter((a) => a.kickPatternGroup !== 'Funky')
            num = Math.floor(Math.random()*kickPatternsOfChoiceGroup.length)
            kickPrimaryPattern = (kickPatternsOfChoiceGroup[num])
        } else if(kickPatternGroupChoice1.value !== 'Any'){
            let kickPatternsOfChoiceGroup = kickPatternArrayAll.filter((a) => a.kickPatternGroup === kickPatternGroupChoice1.value)
            num = Math.floor(Math.random()*kickPatternsOfChoiceGroup.length)
            kickPrimaryPattern = (kickPatternsOfChoiceGroup[num])
        } 

        if(kickPatternGroupChoice2.value === 'Any'){
            num = Math.floor(Math.random()*kickPatternArrayAll.length)
            kickSecondaryPattern = (kickPatternArrayAll[num])
        } else if(kickPatternGroupChoice2.value === 'NotFunky'){
            let kickPatternsOfChoiceGroup = kickPatternArrayAll.filter((a) => a.kickPatternGroup !== 'Funky')
            num = Math.floor(Math.random()*kickPatternsOfChoiceGroup.length)
            kickSecondaryPattern = (kickPatternsOfChoiceGroup[num])
        } else if(kickPatternGroupChoice2.value !== 'Any'){
            let kickPatternsOfChoiceGroup = kickPatternArrayAll.filter((a) => a.kickPatternGroup === kickPatternGroupChoice2.value)
            num = Math.floor(Math.random()*kickPatternsOfChoiceGroup.length)
            kickSecondaryPattern = (kickPatternsOfChoiceGroup[num])
        } 

        if(kickPatternGroupChoice3.value === 'Any'){
            num = Math.floor(Math.random()*kickPatternArrayAll.length)
            kickBridgePattern = (kickPatternArrayAll[num])
        } else if(kickPatternGroupChoice3.value === 'NotFunky'){
            let kickPatternsOfChoiceGroup = kickPatternArrayAll.filter((a) => a.kickPatternGroup !== 'Funky')
            num = Math.floor(Math.random()*kickPatternsOfChoiceGroup.length)
            kickBridgePattern = (kickPatternsOfChoiceGroup[num])
        }else if(kickPatternGroupChoice3.value !== 'Any'){
            let kickPatternsOfChoiceGroup = kickPatternArrayAll.filter((a) => a.kickPatternGroup === kickPatternGroupChoice3.value)
            num = Math.floor(Math.random()*kickPatternsOfChoiceGroup.length)
            kickBridgePattern = (kickPatternsOfChoiceGroup[num])
        } 

        kickPatternDisplay.innerHTML = (kickPrimaryPattern.kickPatternName + ' | ' + kickSecondaryPattern.kickPatternName + ' | ' + kickBridgePattern.kickPatternName)
        
    }

    function getLeadPatterns(){
        let num
        let num1 = Math.floor(Math.random()*leadPatternArrayAll.length)
        let num2 = Math.floor(Math.random()*leadPatternArrayAll.length)
        let num3 = Math.floor(Math.random()*leadPatternArrayAll.length)

        if(leadPatternGroupChoice1.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            leadPrimaryPattern = (leadPatternArrayAll[num1])
        } else if(leadPatternGroupChoice1.value !== 'Any'){
            let leadPatternsOfChoiceGroup = leadPatternArrayAll.filter((a) => a.leadPatternGroup === leadPatternGroupChoice1.value)
            num4 = Math.floor(Math.random()*leadPatternsOfChoiceGroup.length)
            leadPrimaryPattern = (leadPatternsOfChoiceGroup[num4])
        }

        if(leadPatternGroupChoice2.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            leadSecondaryPattern = (leadPatternArrayAll[num])
            while(leadSecondaryPattern === leadPrimaryPattern){
                num = Math.floor(Math.random()*leadPatternArrayAll.length)
                leadSecondaryPattern = (leadPatternArrayAll[num])
            }
        } else if(leadPatternGroupChoice2.value !== 'Any'){
            let leadPatternsOfChoiceGroup = leadPatternArrayAll.filter((a) => a.leadPatternGroup === leadPatternGroupChoice2.value)
            num = Math.floor(Math.random()*leadPatternsOfChoiceGroup.length)
            leadSecondaryPattern = (leadPatternsOfChoiceGroup[num])
            while(leadSecondaryPattern === leadPrimaryPattern){
                num = Math.floor(Math.random()*leadPatternsOfChoiceGroup.length)
                leadSecondaryPattern = (leadPatternsOfChoiceGroup[num])
            }
        }

        if(leadPatternGroupChoice3.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            leadBridgePattern = (leadPatternArrayAll[num])
        } else if(leadPatternGroupChoice3.value !== 'Any'){
            let leadPatternsOfChoiceGroup = leadPatternArrayAll.filter((a) => a.leadPatternGroup === leadPatternGroupChoice3.value)
            num6 = Math.floor(Math.random()*leadPatternsOfChoiceGroup.length)
            leadBridgePattern = (leadPatternsOfChoiceGroup[num6])
        }

            //this section does the lead+ stuff
            leadPlusPrimaryPattern = (leadPatternArrayAll[num1])
            leadPlusSecondaryPattern = (leadPatternArrayAll[num2])
            leadPlusBridgePattern = (leadPatternArrayAll[num3])



            leadPlusPatternDisplay.innerHTML = (leadPlusPrimaryPattern.leadPatternName + ' | ' + leadPlusSecondaryPattern.leadPatternName + ' | ' + leadPlusBridgePattern.leadPatternName)

            leadPatternDisplay.innerHTML = (leadPrimaryPattern.leadPatternName + ' | ' + leadSecondaryPattern.leadPatternName + ' | ' + leadBridgePattern.leadPatternName)
        
    }

    function getModulation(){
        if(modulationTypeChoice1.value === 'Any'){
            let num = Math.floor(Math.random()*modulationArrayAll.length)
            modulationPrimary = (modulationArrayAll[num])
        } else if(modulationTypeChoice1.value !== 'Any'){
            let modulationOfChoiceType = modulationArrayAll.filter((a) => a.modulationType === modulationTypeChoice1.value)
            let num = Math.floor(Math.random()*modulationOfChoiceType.length)
            modulationPrimary = (modulationOfChoiceType[num])
        }

        if(modulationTypeChoice2.value === 'Any'){
            let num = Math.floor(Math.random()*modulationArrayAll.length)
            modulationSecondary = (modulationArrayAll[num])
            } else if(modulationTypeChoice2.value !== 'Any'){
                let modulationOfChoiceType = modulationArrayAll.filter((a) => a.modulationType === modulationTypeChoice2.value)
                let num = Math.floor(Math.random()*modulationOfChoiceType.length)
                modulationSecondary = (modulationOfChoiceType[num])
            }

        if(modulationTypeChoice3.value === 'Any'){
            let num = Math.floor(Math.random()*modulationArrayAll.length)
            modulationBridge = (modulationArrayAll[num])
            } else if(modulationTypeChoice3.value !== 'Any'){
                let modulationOfChoiceType = modulationArrayAll.filter((a) => a.modulationType === modulationTypeChoice3.value)
                let num = Math.floor(Math.random()*modulationOfChoiceType.length)
                modulationBridge = (modulationOfChoiceType[num])
            }

            modulationDisplay.innerHTML = (modulationPrimary.modulationName + ' | ' + modulationSecondary.modulationName + ' | ' + modulationBridge.modulationName)
        
    }

    
getTempoInRange()
getnumberOfSections()
getScale()
getChords()
getBassPatterns()
getKickPatterns()
getLeadPatterns()
getModulation()

//for testing and generating many songs
for(let i = 0; i < 100; i++){
    getTempoInRange()
    getnumberOfSections()
    getScale()
    getChords()
    getBassPatterns()
    getKickPatterns()
    getLeadPatterns()
    getModulation()
    console.log('&' + newTempo + '&' + 
                numberOfSections + '&' + 
                (thisSongsKeyIs + " " + thisSongsScaleIs.scaleName)  + '&' + 
                (primaryChordProgDisplay + ' | ' + secondaryChordProgDisplay  + ' | ' + bridgeChordProgDisplay) + '&' +
                (bassPrimaryPattern.bassPatternName + ' | ' + bassSecondaryPattern.bassPatternName + ' | ' + bassBridgePattern.bassPatternName) + '&' +
                (kickPrimaryPattern.kickPatternName + ' | ' + kickSecondaryPattern.kickPatternName + ' | ' + kickBridgePattern.kickPatternName) + '&' +
                (leadPrimaryPattern.leadPatternName + ' | ' + leadSecondaryPattern.leadPatternName + ' | ' + leadBridgePattern.leadPatternName) + '&' +
                (leadPlusPrimaryPattern.leadPatternName + ' | ' + leadPlusSecondaryPattern.leadPatternName + ' | ' + leadPlusBridgePattern.leadPatternName) + '&' +
                (modulationPrimary.modulationName + ' | ' + modulationSecondary.modulationName + ' | ' + modulationBridge.modulationName)

            )}

