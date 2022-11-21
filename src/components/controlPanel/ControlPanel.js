import React from 'react'
import SoundSpeedControls from './SoundSpeedControls'
import TrainingProtocol from './TrainingProtocol'
import TimingLine from './TimingLine'

const ControlPanel = () => {
  return (
    <div className='control-panel-container'>
      <div className='inner-cpc'>
        <SoundSpeedControls />
        <TrainingProtocol />
      </div>
      <TimingLine />
    </div>
  )
}

export default ControlPanel