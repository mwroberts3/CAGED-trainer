import React from 'react'
import { useGlobalContext } from '../../context'

const TimingLine = () => {
  const { speed } = useGlobalContext();

setTimeout(() => {
  console.log(document.querySelector('.timing-line').style.width)

  document.querySelector('.timing-line').style.width = 1000;

  document.querySelector('.timing-line').classList.add('trim');
}, speed.value)

  return (
    <div className='timing-line timing-line-1'></div>
  )
}

export default TimingLine