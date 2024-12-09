var tempo = []
var tempoOutput = document.getElementById("tempoDisplay")
var newTempo = 120
tempoOutput.innerHTML = newTempo; 

// Display the tempo slider value
var sliderHigh = document.getElementById("tempoHigh");
var outputHigh = document.getElementById("tempoHighDisplay");
outputHigh.innerHTML = sliderHigh.value;
var tempoHigh = sliderHigh.value;
// Display the tempo slider value
var sliderLow = document.getElementById("tempoLow");
var outputLow = document.getElementById("tempoLowDisplay");
outputLow.innerHTML = sliderLow.value;
var tempoLow = sliderLow.value;

//make the sliders update the html to reflect changes
sliderHigh.oninput = function() {
    outputHigh.innerHTML = this.value;
}

sliderLow.oninput = function() {
    outputLow.innerHTML = this.value;
}

//this function get triggered when they click the tempo button 
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
