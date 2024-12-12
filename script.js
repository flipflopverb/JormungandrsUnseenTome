//initial values and variables and arrays
    let tempo = []
    let scaleArray = []
    let chordArrayAll = []
    let scaleOptionsForThisSong = []
    let thisSongsNotesAre = []
    let thisSongsChordChoicesAre = []
    let primaryChordProgression = []; let secondaryChordProgression = []; let bridgeChordProgression = []
    let primaryChordProgDisplay = []; let secondaryChordProgDisplay = []; let bridgeChordProgDisplay = []
    let bassPatternArrayAll = []; let bassPatternGroupArray = []; let bassPatternNamesArray = []
    let kickPatternArrayAll = []
    let leadPatternArrayAll = []
    let modulationArrayAll = []

    let twelveTET = ['C', 'C#', 'D','D#','E','F','F#','G','G#','A','A#','B']; let twelveTETMod; let twelveTETindex
    let songTempo
    let songLength
    let numberOfSections
    let thisSongsScaleIs
    let bassPrimaryPattern; let bassSecondaryPattern; let bassBridgePattern
    let kickPrimaryPattern; let kickSecondaryPattern; let kickBridgePattern
    let leadPrimaryPattern; let leadSecondaryPattern; let leadBridgePattern
    let modulationPrimary; let modulationSecondary; let modulationBridge

//display items
    const outputHigh = document.getElementById("tempoHighDisplay")
    const outputLow = document.getElementById("tempoLowDisplay")
    const outputSongLength = document.getElementById("songLengthDisplay")
    const tempoOutput = document.getElementById("tempoDisplay")
    const numberOfSectionsOutput = document.getElementById("numberOfSectionsDisplay")
    const scaleDisplay = document.getElementById("scaleDisplay")
    const scaleNotesDisplay = document.getElementById("scaleNotesDisplay")
    const chordDisplay = document.getElementById("chordDisplay")
    const bassPatternDisplay = document.getElementById('bassPatternDisplay')
    const kickPatternDisplay = document.getElementById('kickPatternDisplay')
    const leadPatternDisplay = document.getElementById('leadPatternDisplay')
    const leadPlusPatternDisplay = document.getElementById('leadPlusPatternDisplay')
    const outputChordCount1 = document.getElementById("outputChordCountDisplay1"); const outputChordCount2 = document.getElementById("outputChordCountDisplay2"); const outputChordCount3 = document.getElementById("outputChordCountDisplay3")



//user chosen values
    const sliderTempoHigh = document.getElementById("tempoHigh")
    const sliderTempoLow = document.getElementById("tempoLow")
    const sliderSongLength = document.getElementById("songLength")
    const scaleTypeChoice = document.getElementById("scaleType")
    const scaleClassChoice = document.getElementById("scaleClass")
    const scaleLengthChoice = document.getElementById("scaleLength")
    const slot1Preference = document.getElementById('slot1Preference')
    const chordCountSection1 = document.getElementById("chordCountSection1"); const chordCountSection2 = document.getElementById("chordCountSection2"); const chordCountSection3 = document.getElementById("chordCountSection3")
    const borrowedChords2 = document.getElementById('borrowedChords2');// const borrowedChords3 = document.getElementById('borrowedChords3')
    const bassPatternGroupChoice1 = document.getElementById("bassPatternGroupChoice1"); const bassPatternGroupChoice2 = document.getElementById("bassPatternGroupChoice2"); const bassPatternGroupChoice3 = document.getElementById("bassPatternGroupChoice3")
    const kickPatternGroupChoice1 = document.getElementById('kickPatternGroupChoice1'); const kickPatternGroupChoice2 = document.getElementById('kickPatternGroupChoice2'); const kickPatternGroupChoice3 = document.getElementById('kickPatternGroupChoice3')
    const leadPatternGroupChoice1 = document.getElementById('leadPatternGroupChoice1'); const leadPatternGroupChoice2 = document.getElementById('leadPatternGroupChoice2'); const leadPatternGroupChoice3 = document.getElementById('leadPatternGroupChoice3')
    const modulationTypeChoice1 = document.getElementById('modulationTypeChoice1'); const modulationTypeChoice2 = document.getElementById('modulationTypeChoice2'); const modulationTypeChoice3 = document.getElementById('modulationTypeChoice3')

//buttons
    const generateButton = document.getElementById('generateButton')
    const generateManyButton = document.getElementById('generateManyButton')
    
//reactive sliders to make numbers update in the HTML as it changes
    sliderTempoHigh.oninput = function() {
        outputHigh.innerHTML = this.value;
    }
    sliderTempoLow.oninput = function() {
        outputLow.innerHTML = this.value;
    }
    sliderSongLength.oninput = function() {
        outputSongLength.innerHTML = this.value;
    }
    chordCountSection1.oninput = function() { 
        outputChordCount1.innerHTML = this.value;
    }
    chordCountSection2.oninput = function() {
        outputChordCount2.innerHTML = this.value;
    }
    chordCountSection3.oninput = function() { 
        outputChordCount3.innerHTML = this.value;
    }


//Function factories for all the objects
    function ChordObject(chordCategory, chordRomanSymbol,  chordQuality, chordDegree, chordIntervals, chordDensity, chordIntervalsAbsolute){
    this.chordCategory = chordCategory
    this.chordRomanSymbol = chordRomanSymbol
    this.chordQuality = chordQuality
    this.chordDegree = chordDegree
    this.chordIntervals = chordIntervals
    this.chordIntervalsAbsolute = chordIntervalsAbsolute
    this.chordDensity = chordDensity
    chordArrayAll.push(this)
    }

    const chord0 = new ChordObject('Major Triad','I', 'Major', 'Tonic', [0, 2, 4],[], 3)
    const chord1 = new ChordObject('Minor Triad','i', 'Minor', 'Tonic', [0, 2, 4],[], 3)
    const chord2 = new ChordObject('Minor Triad','ii', 'Minor', 'Supertonic', [1, 3, 5],[], 3)
    const chord3 = new ChordObject('Diminished Triad','ii°', 'Diminished', 'Supertonic', [1, 3, 5],[], 3)
    const chord4 = new ChordObject('Major Triad','III', 'Major', 'Mediant', [2, 4, 6],[], 3)
    const chord5 = new ChordObject('Augmented Triad','III⁺', 'Diminished', 'Mediant', [2, 4, 6],[], 3)
    const chord6 = new ChordObject('Minor Triad','iii', 'Minor', 'Mediant', [2, 4, 6],[], 3)
    const chord7 = new ChordObject('Major Triad','IV', 'Major', 'Subdominant', [4, 6, 0],[], 3)
    const chord8 = new ChordObject('Minor Triad','iv', 'Minor', 'Subdominant', [4, 6, 0],[], 3)
    const chord9 = new ChordObject('Major Triad','V', 'Major','Dominant', [5, 7, 1],[], 3)
    const chord10 = new ChordObject('Minor Triad','v', 'Minor', 'Dominant', [5, 7, 1],[], 3)
    const chord11 = new ChordObject('Major Triad','VI', 'Major', 'Submediant', [6, 0, 2],[], 3)
    const chord12 = new ChordObject('Minor Triad','vi', 'Minor', 'Submediant', [6, 0, 2],[], 3)
    const chord13 = new ChordObject('Diminished Triad','vi°', 'Diminished', 'Submediant', [6, 0, 2],[], 3)
    const chord14 = new ChordObject('Major Triad','VII', 'Major', 'Subtonic', [7, 1, 3],[], 3)
    const chord15 = new ChordObject('Diminished Triad','vii°', 'Diminished', 'Leading Tone', [7, 1, 3],[], 3)
    const chord16 = new ChordObject('Diminished Triad','vii°', 'Diminished','Subtonic', [7, 1, 3],[], 3)
    //const chord99 = new ChordObject('Harold','X','Unreal', 'Power Bottom', [1,1,1],[], 3)


    function ScaleObject(scaleName, scaleInterval, scaleLength, scaleClass, scaleType, scaleChordArray){
        this.scaleName = scaleName
        this.scaleInterval = scaleInterval
        this.scaleLength = scaleLength
        this.scaleClass = scaleClass
        this.scaleType = scaleType
        this.scaleChordArray = scaleChordArray
        scaleArray.push(this)
    } 
    const scale1 = new ScaleObject('Major',[0,2,4,5,7,9,11],'Heptatonic','Traditional', 'Major',
        [chordArrayAll[0],chordArrayAll[2],chordArrayAll[6],chordArrayAll[7],chordArrayAll[9],chordArrayAll[12],chordArrayAll[16]])
    const scale2 = new ScaleObject('Natural Minor',[0,2,3,5,7,8,10],'Heptatonic','Traditional', 'Minor',
        [chordArrayAll[1],chordArrayAll[3],chordArrayAll[4],chordArrayAll[8],chordArrayAll[10],chordArrayAll[11],chordArrayAll[14]])
    const scale3 = new ScaleObject('Harmonic Minor', [0,2,3,5,7,8,11],'Heptatonic','nonstandard', 'Minor',
        [chordArrayAll[1],chordArrayAll[3],chordArrayAll[5],chordArrayAll[8],chordArrayAll[9],chordArrayAll[11],chordArrayAll[16]])
    const scale4 = new ScaleObject('Melodic Minor',[0,2,3,5,7,9,11],'Heptatonic','nonstandard', 'Minor',
        [chordArrayAll[1],chordArrayAll[2],chordArrayAll[5],chordArrayAll[7],chordArrayAll[9],chordArrayAll[13],chordArrayAll[16]])
    const scale5 = new ScaleObject('Major Pentatonic', [0,2,4,7,9],'Pentatonic', 'nonstandard','Major',
        [chordArrayAll[0],chordArrayAll[12]])
    const scale6 = new ScaleObject('Minor Pentatonic', [0,3,5,7,10],'Pentatonic', 'nonstandard','Minor', 
        [chordArrayAll[0],chordArrayAll[12]])


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

    function ModulationObject(modulationName, modulationType, modulationClass){
        this.modulationName = modulationName
        this.modulationType = modulationType
        this.modulationClass = modulationClass
        modulationArrayAll.push(this)
        }

    const modulation1 = new ModulationObject('Ascent', 'Ordered', 'Any')
    const modulation2 = new ModulationObject('Descent', 'Ordered', 'Any')
    const modulation3 = new ModulationObject('Melodic', 'Unordered', 'Melody')
    const modulation4 = new ModulationObject('Chord', 'Following', 'Any')
    const modulation5 = new ModulationObject('None', 'None', 'Any')






//Function section

    //button functions
    generateButton.addEventListener('click', function(){
        getTempoInRange()
        getScale()
        getChords()
        getBassPatterns()
        getKickPatterns()
        getLeadPatterns()
        getModulation()
    })
    generateManyButton.addEventListener('click', function(){
        getMany()
    })


    function getTempoInRange() {
        tempo = [] //clear old values
        tempo.push(sliderTempoLow.value)
        tempo.push(sliderTempoHigh.value)
        tempo.sort((a, b) => a - b);// sort the values, just in case they pick a weird range
        songTempo = Math.floor((Math.random()*(Number(tempo[1])-Number(tempo[0])+1))+Number(tempo[0]))
        numberOfSections = Math.round((sliderSongLength.value * songTempo)/(960))
        tempoOutput.innerHTML = songTempo;
        numberOfSectionsOutput.innerHTML = numberOfSections
    }

    function getScale(){
    scaleOptionsForThisSong = []//clear old values

        //this first "for" loop is just grabbing various scales that fit the chosen criteria. If a scale passes the check then its shoved in to an array.
        for (let i = 0; i < scaleArray.length; i++){
            if( ((scaleTypeChoice.value === 'Any') || (scaleTypeChoice.value === scaleArray[i].scaleType)) &&
                ((scaleClassChoice.value === 'Any') || (scaleClassChoice.value === scaleArray[i].scaleClass)) && 
                ((scaleLengthChoice.value === 'Any') || (scaleLengthChoice.value === scaleArray[i].scaleLength)))
                { 
                scaleOptionsForThisSong.push(scaleArray[i])
            }
        }
        //there are some combinations of preferences that a user can make with 
        //regards to the scale that will result in 0 scales being pushed into the array
        //that is why there is an "if" filter function right here

        //the "if" filter pulls a scale at random from the prior array
        if(scaleOptionsForThisSong.length !== 0){
            thisSongsKeyIs = twelveTET[Math.floor(Math.random()*Number(twelveTET.length))]
            thisSongsScaleIs = scaleOptionsForThisSong[Math.floor(Math.random()*Number(scaleOptionsForThisSong.length))]
            scaleInt = scaleOptionsForThisSong[Math.floor(Math.random()*Number(scaleOptionsForThisSong.length))].scaleInterval
            scaleDisplay.innerHTML = (thisSongsKeyIs + " " + thisSongsScaleIs.scaleName)

            twelveTETindex = twelveTET.indexOf(thisSongsKeyIs)
            twelveTETMod = []
            thisSongsNotesAre = []

            //this first "for" loop ensures that the first letter of the Songs Key is put first
            for (let i = twelveTETindex; i < twelveTET.length; i++){
                twelveTETMod.push(twelveTET[i])
            }
            //this second "for" loop fils out the rest of the twelveTETMod array with notes that are prior to the Song Key
            for (let i = 0; i < twelveTETindex; i++){
                twelveTETMod.push(twelveTET[i])
            }

            //this last "for" loop iterates the scaleInterval attribute of the chosen scale over the twelveTETMod scale
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
        //these blank arrays are just to clear any old values
        primaryChordProgression = []
        primaryChordProgDisplay = []
        secondaryChordProgression = []
        secondaryChordProgDisplay = []
        bridgeChordProgression = []
        bridgeChordProgDisplay = []
        thisSongsChordChoicesAre = []

        thisSongsChordChoicesAre = thisSongsScaleIs.scaleChordArray
        
        for(let i = 0; i < chordCountSection1.value;){
            let num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
            if(i === 0){
                if(slot1Preference.value === 'Any'){
                primaryChordProgression.push(thisSongsChordChoicesAre[num])
                primaryChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
                } else{
                    primaryChordProgression.push((thisSongsChordChoicesAre.filter((a) => a.chordDegree === slot1Preference.value))[0])
                    primaryChordProgDisplay.push(primaryChordProgression[i].chordRomanSymbol)
                    i++
                }
            }else if(thisSongsChordChoicesAre[num] !== primaryChordProgression[i-1]){
                primaryChordProgression.push(thisSongsChordChoicesAre[num])
                primaryChordProgDisplay.push(thisSongsChordChoicesAre[num].chordRomanSymbol)
                i++
            } else{}
        }
        
        if(borrowedChords2.checked === true){
            for(let i = 0; i < chordCountSection2.value;){
                let num = Math.floor(Math.random()*chordArrayAll.length)
                if(i === 0){
                    num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
                    secondaryChordProgression.push(thisSongsChordChoicesAre[num])
                    secondaryChordProgDisplay.push(secondaryChordProgression[i].chordRomanSymbol)
                    i++
                    
                }else if(chordArrayAll[num].chordDegree !== secondaryChordProgression[i-1].chordDegree){
                    secondaryChordProgression.push(chordArrayAll[num])
                    secondaryChordProgDisplay.push(secondaryChordProgression[i].chordRomanSymbol)
                    i++
                } else{}
            }
        } else {
            for(let i = 0; i < chordCountSection2.value;){
                let num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
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
        }

        for(let i = 0; i < chordCountSection3.value;){
            let num = Math.floor(Math.random()*thisSongsChordChoicesAre.length)
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

        if(leadPatternGroupChoice1.value === 'Any'){
            num = Math.floor(Math.random()*leadPatternArrayAll.length)
            leadPrimaryPattern = (leadPatternArrayAll[num])
        } else if(leadPatternGroupChoice1.value !== 'Any'){
            let leadPatternsOfChoiceGroup = leadPatternArrayAll.filter((a) => a.leadPatternGroup === leadPatternGroupChoice1.value)
            num = Math.floor(Math.random()*leadPatternsOfChoiceGroup.length)
            leadPrimaryPattern = (leadPatternsOfChoiceGroup[num])
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
            num = Math.floor(Math.random()*leadPatternsOfChoiceGroup.length)
            leadBridgePattern = (leadPatternsOfChoiceGroup[num])
        }


        let num1 = Math.floor(Math.random()*leadPatternArrayAll.length)
        let num2 = Math.floor(Math.random()*leadPatternArrayAll.length)
        let num3 = Math.floor(Math.random()*leadPatternArrayAll.length)

        leadPlusPrimaryPattern = (leadPatternArrayAll[num1])
        leadPlusSecondaryPattern = (leadPatternArrayAll[num2])
        leadPlusBridgePattern = (leadPatternArrayAll[num3])

            leadPatternDisplay.innerHTML = (leadPrimaryPattern.leadPatternName + ' | ' + leadSecondaryPattern.leadPatternName + ' | ' + leadBridgePattern.leadPatternName)
            leadPlusPatternDisplay.innerHTML = (leadPlusPrimaryPattern.leadPatternName + ' | ' + leadPlusSecondaryPattern.leadPatternName + ' | ' + leadPlusBridgePattern.leadPatternName)
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

    function getMany(){
        console.clear()
    for(let i = 0; i < 10; i++){
    
        getTempoInRange();getScale();getChords();getBassPatterns();getKickPatterns();getLeadPatterns();getModulation();
    
        console.log(' - ' + songTempo + ' - ' + 
                    numberOfSections + ' - ' + 
                    (thisSongsKeyIs + " " + thisSongsScaleIs.scaleName)  + ' - ' + 
                    (primaryChordProgDisplay + ' | ' + secondaryChordProgDisplay  + ' | ' + bridgeChordProgDisplay) + ' - ' +
                    (bassPrimaryPattern.bassPatternName + ' | ' + bassSecondaryPattern.bassPatternName + ' | ' + bassBridgePattern.bassPatternName) + ' - ' +
                    (kickPrimaryPattern.kickPatternName + ' | ' + kickSecondaryPattern.kickPatternName + ' | ' + kickBridgePattern.kickPatternName) + ' - ' +
                    (leadPrimaryPattern.leadPatternName + ' | ' + leadSecondaryPattern.leadPatternName + ' | ' + leadBridgePattern.leadPatternName) + ' - ' +
                    (leadPlusPrimaryPattern.leadPatternName + ' | ' + leadPlusSecondaryPattern.leadPatternName + ' | ' + leadPlusBridgePattern.leadPatternName) + ' - ' +
                    (modulationPrimary.modulationName + ' | ' + modulationSecondary.modulationName + ' | ' + modulationBridge.modulationName)
    
                )}
            }

    
getTempoInRange()
getScale()
getChords()
getBassPatterns()
getKickPatterns()
getLeadPatterns()
getModulation()
