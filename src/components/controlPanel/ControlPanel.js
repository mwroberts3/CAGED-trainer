import React from 'react'
import SoundSpeedControls from './SoundSpeedControls'
import TrainingProtocol from './TrainingProtocol'

const ControlPanel = () => {
  return (
    <div className='control-panel-container'>
      <SoundSpeedControls />
      <TrainingProtocol />
    </div>
  )
}

export default ControlPanel