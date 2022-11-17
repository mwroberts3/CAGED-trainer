import React from 'react'
import TrainingUnit from './TrainingUnit'

const DisplayHUD = () => {
  return (
    <div className='display-HUD-container'>
      <div className='display-HUD-inner-container'>
        <div className='previous-unit'><TrainingUnit /></div>
        <div className='current-unit'><TrainingUnit /></div>
        <div className='next-unit'><TrainingUnit /></div>
      </div>
    </div>
  )
}

export default DisplayHUD