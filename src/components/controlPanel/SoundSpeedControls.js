import React from 'react'
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const SoundSpeedControls = () => {
  const { speed, setSpeed, play, setPlay } = useGlobalContext();

  return <>
      <div className='sound-control option-setting'>
        <FaVolumeUp />
        {play ? <FaPause onClick={() => setPlay(false)}/> : <FaPlay onClick={() => setPlay(true)}/>}
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