import React from 'react'
import TrainingUnit from './TrainingUnit'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context'
import { data } from '../../data'

const DisplayHUD = () => {
  console.log(data);

  const { trainingParameters, speed, play } = useGlobalContext();

  const [trainingUnits, setTrainingUnits] = useState({})

  // will need to get and use the speed and play/pause bindings through context
  const generateNextTrainingUnit = () => { 
    let randomIndex = Math.random();
    randomIndex = Math.floor(randomIndex * 79);
    console.log(randomIndex);

    let tempForm = Object.keys(data.chords[randomIndex])[0].substring(0,1);
    
    let tempPos = createPosDis();

    let tempChord = Object.values(data.chords[randomIndex])[0];

    setTrainingUnits({prev: {form: 'prev form', position: 'prev pos', chord: 'prev chord'},
    current: {form: `${tempForm} form`, position: `${tempPos} position`, chord: tempChord},
    next: {form: 'next form', position: 'next pos', chord: 'next chord'}});

    function createPosDis() {
      let pos = +Object.keys(data.chords[randomIndex])[0].substring(1);

      if (pos === 0) return 'open';
      if (pos === 1) return '1st';
      if (pos === 2) return '2nd';
      if (pos === 3) return '3rd';

      return `${pos}th`;
    }
  }



  // generate first random training unit
  useEffect(() => {
    generateNextTrainingUnit();

    setInterval(() => {
    console.log('next training unit')

    if (play) {
      generateNextTrainingUnit();
    }
  }, speed.value)
  }, [speed, play])

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