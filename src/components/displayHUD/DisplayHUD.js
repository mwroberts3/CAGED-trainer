import React from 'react'
import TrainingUnit from './TrainingUnit'
import PressPlay from './PressPlay'
import { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import { data } from '../../data'

const DisplayHUD = () => {
  const { trainingParameters, speed, play, timingLineRef, clickRef } = useGlobalContext();

  const unitPass1 = useRef(null);
  const unitPass2 = useRef(null);

  const [trainingUnits, setTrainingUnits] = useState({});

  useEffect(() => {
    if (play) generateNextTrainingUnit(true);
    
    const trainingInterval = setInterval(() => {
      if (play) {
        generateNextTrainingUnit(false);
      }
    }, speed.value);
  
    function generateNextTrainingUnit(firstPlay) {
      let max = trainingParameters.fretRange.max * 5 === 0 ? 4 : trainingParameters.fretRange.max * 5 + 5;
      let min = trainingParameters.fretRange.min * 5 >= 0 ? trainingParameters.fretRange.min * 5 : 0;

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
        
      setTrainingUnits({
        prev: {
            form: unitPass2.current ? unitPass2.current.form : '', 
            position: unitPass2.current ? unitPass2.current.position : '', 
            chord: unitPass2.current ? unitPass2.current.chord : '',},
        current: {
            form: unitPass1.current ? unitPass1.current.form : 'Get Ready', 
            position: unitPass1.current ? unitPass1.current.position : '', 
            chord: unitPass1.current ? unitPass1.current.chord : '',},
        next: {
            form: `${tempForm} form`, 
            position: `${tempPos} pos`, 
            chord: `${tempChord} chord`}
      });

      if (unitPass1.current) {
        unitPass2.current = {
          form: unitPass1.current.form,
          position: unitPass1.current.position,
          chord: unitPass1.current.chord,
        }
      }
      
      unitPass1.current = {
          form: `${tempForm} form`, 
          position: `${tempPos} pos`, 
          chord: `${tempChord} chord`
        }

      timingLineTransition();
      if (!firstPlay) clickRef.current.play();

      function createPosDis() {
        let pos = +Object.keys(data.chords[randomIndex])[0].substring(1);

        if (pos === 0) return 'open';
        if (pos === 1) return '1st';
        if (pos === 2) return '2nd';
        if (pos === 3) return '3rd';

        return `${pos}th`;
      }

      function timingLineTransition() {
        if (timingLineRef.current.classList.contains('trim')) {
          timingLineRef.current.classList.add('grow');
          timingLineRef.current.classList.remove('trim');
        } else {
          timingLineRef.current.classList.add('trim');
          timingLineRef.current.classList.remove('grow');
        }
      }
    }
  return () => clearInterval(trainingInterval);
  }, [speed, play, trainingParameters.fretRange, timingLineRef, clickRef])

  return (
    <div className='display-HUD-container'>
      <div className='display-HUD-inner-container'>
        {trainingUnits.current ? <>
        <div className='previous-unit'>
          <TrainingUnit unitInfo={trainingUnits.prev} alwaysShowForm={true}/>
        </div>
        <div className='current-unit'>
          <TrainingUnit unitInfo={trainingUnits.current}/>
        </div>
        <div className='next-unit'>
          <TrainingUnit unitInfo={trainingUnits.next}/>
        </div></> : <PressPlay />}
      </div>
    </div>
  )
}

export default DisplayHUD