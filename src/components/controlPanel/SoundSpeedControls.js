import React from 'react'
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const SoundSpeedControls = () => {
  const { speed, setSpeed, play, setPlay, mute, setMute, pressPlayRef } = useGlobalContext();

  const handleSpeedChange = (e) => {
    if (+e.target.value === 1) setSpeed({setting: e.target.value, value: 5000})
    if (+e.target.value === 2) setSpeed({setting: e.target.value, value: 3000})
    if (+e.target.value === 3) setSpeed({setting: e.target.value, value: 1500})
  }

  return <>
      <div className='sound-control option-setting'>
        {!mute ? <FaVolumeUp onClick={() => setMute(true)}/> : <FaVolumeMute onClick={() => setMute(false)}/>}
        {play ? <FaPause onClick={() => {
          pressPlayRef.current.style.display = 'block';
          setPlay(false);
        }}/> : <FaPlay onClick={() => setPlay(true)}/>}
      </div>
      <div className='speed-control option-setting'>
        <label>Speed </label>
          <select value={speed.setting} onChange={handleSpeedChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
      </div>
  </>
}

export default SoundSpeedControls