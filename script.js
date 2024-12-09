//initial values and variables and arrays
var tempo = []
var tempoOutput = document.getElementById("tempoDisplay")
var numberOfSectionsOutput = document.getElementById("numberOfSectionsDisplay")
var scaleDisplay = document.getElementById("scaleDisplay")
var newTempo
var numberOfSections
var thisSongsScaleIs 





//chromatic note objects and note arrays
var twelveTET = ['C', 'C#', 'D','D#','E','F','F#','G','G#','A','A#','B']





//scale objects and scale interval arrays
function ScaleObject(name, scaleInterval){
    this.name = name
    this.scaleInterval = scaleInterval
    this.info = function(){
        console.log("Name: " + this.name +  " | Interval: " + this.scaleInterval)
    }
} 
const scale1 = new ScaleObject('Major',[0,2,4,5,7,9,11])
const scale2 = new ScaleObject('Natural Minor',[0,2,3,5,7,8,10])
const scale3 = new ScaleObject('Harmonic Minor', [0,2,3,5,7,8,11])
const scale4 = new ScaleObject('Melodic Minor',[0,2,3,5,7,9,11])
//const userScale1 = ('customUserScaleName1' ,[0, 1, 2, 3, 4, 5, 6])

var scaleArray = [scale1, scale2, scale3, scale4]

scaleArray[1].info()













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
