import React from 'react'
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa'

const SoundSpeedControls = () => {
  return <>
      <div className='sound-control option-setting'>
        <FaVolumeUp />
        <FaPlay />
      </div>
      <div className='speed-control option-setting'>
        <label>Speed:</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
  </>
}

export default SoundSpeedControls