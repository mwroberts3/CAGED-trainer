import React from 'react'

const TrainingUnit = ({unitInfo}) => {
  const {form, position, chord} = unitInfo;
  return (
    <div className='training-unit'>
      <p>{form}</p>
      <p>{position}</p>
      <p>{chord}</p>
    </div>
  )
}

export default TrainingUnit