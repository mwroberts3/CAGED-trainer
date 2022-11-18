import React from 'react'
import TrainingUnit from './TrainingUnit'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context'
import { data } from '../../data'

const DisplayHUD = () => {
  const { trainingParameters, speed, play } = useGlobalContext();

  const [trainingUnits, setTrainingUnits] = useState({})

  // will need to get and use the speed and play/pause bindings through context
  const generateNextTrainingUnit = () => {   
    setTrainingUnits({prev: {form: 'prev form', position: 'prev pos', chord: 'prev chord'},
    current: {form: Math.random(), position: 'current pos', chord: 'current chord'},
    next: {form: 'next form', position: 'next pos', chord: 'next chord'}});
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