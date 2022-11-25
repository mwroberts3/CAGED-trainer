import React from 'react'
import { useGlobalContext } from '../../context'

const TimingLine = () => {
  const { speed, timingLineRef } = useGlobalContext();

  return <div ref={timingLineRef} className={`timing-line timing-line-${speed.setting}`}></div>
    
}

export default TimingLine