const PressPlay = ({pressPlayRef, msg}) => {
  return (
    <div className='current-unit press-play' ref={pressPlayRef}>{msg}</div>
  )
}

export default PressPlay