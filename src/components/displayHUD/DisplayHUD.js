import React from 'react'
import TrainingUnit from './TrainingUnit'
import { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import { data } from '../../data'

const DisplayHUD = () => {
  const { trainingParameters, speed, play } = useGlobalContext();

  const refTest = useRef(null)

  const [trainingUnits, setTrainingUnits] = useState({});

  
  // maybe a useMemo to store the previous and current training units?

  // generate first random training unit
  useEffect(() => {
    const generateNextTrainingUnit = () => {
    // let max = (trainingParameters.fretRange.max + 1) * 5 - 1;
    // let min = trainingParameters.fretRange.min * 5;
    // trainingParameters.fretRange.min = 0 ? min = 0 : min = trainingParameters.fretRange.min * 5 - 1

    let max = 79;
    let min = 0;
    
    let difference = max - min;

    // generate random number 
    let randomIndex = Math.random();

    // multiply with difference 
    randomIndex = Math.floor( randomIndex * difference);

    // add with min value 
    randomIndex = randomIndex + min;

    let tempForm = Object.keys(data.chords[randomIndex])[0].substring(0,1);
    
    let tempPos = createPosDis();

    let tempChord = Object.values(data.chords[randomIndex])[0];
    
    console.log(refTest);
    
    setTrainingUnits({
      prev: {
        form: 'prev form', 
        position: 'prev pos', 
        chord: 'prev chord'},
        current: {
          form: refTest.current ? refTest.current.form : 'undefined', 
          position: refTest.current ? refTest.current.position : 'undefined', 
          chord: refTest.current ? refTest.current.chord : 'undefined',},
          next: {
            form: `${tempForm} form`, 
            position: `${tempPos} pos`, 
            chord: `${tempChord} chord`}
          });
          
    refTest.current = {form: `${tempForm} form`, 
        position: `${tempPos} pos`, 
        chord: `${tempChord} chord`}
    function createPosDis() {
      let pos = +Object.keys(data.chords[randomIndex])[0].substring(1);

      if (pos === 0) return 'open';
      if (pos === 1) return '1st';
      if (pos === 2) return '2nd';
      if (pos === 3) return '3rd';

      return `${pos}th`;
    }
  }

    generateNextTrainingUnit();

    const trainingInterval = setInterval(() => {
    if (play) {
      generateNextTrainingUnit();
    }
  }, speed.value);

  return () => clearInterval(trainingInterval);
  }, [speed, play, trainingParameters])

  return (
    <div className='display-HUD-container'>
      <div className='display-HUD-inner-container'>
        {trainingUnits.current && <>
        <div className='previous-unit'><TrainingUnit unitInfo={trainingUnits.prev}/></div>
        <div className='current-unit'><TrainingUnit unitInfo={trainingUnits.current}/></div>
        <div className='next-unit'><TrainingUnit unitInfo={trainingUnits.next}/></div></>}
      </div>
    </div>
  )
}

export default DisplayHUD