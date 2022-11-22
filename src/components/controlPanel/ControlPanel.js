import React from 'react'
import SoundSpeedControls from './SoundSpeedControls'
import TrainingProtocol from './TrainingProtocol'
import TimingLine from './TimingLine'

const ControlPanel = () => {
  return (
    <div className='control-panel-container'>
      <TimingLine />
      <div className='inner-cpc'>
        <SoundSpeedControls />
        <TrainingProtocol />
      </div>
    </div>
  )
}

export default ControlPanel