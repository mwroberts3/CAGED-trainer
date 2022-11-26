import { useState, useContext, useRef, createContext } from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [trainingParameters, setTrainingParameters] = useState({
    fretRange: {min: 0, max: 15},
    showForm: true,
    type: 'chords'
    })
  
  const updateTrainingParameters = (e) => {
    if (e.target.id === 'min-select') {
      if (e.target.value > trainingParameters.fretRange.max) {
        alert('choose value lower or equal to max');
      } else {
        setTrainingParameters((state) => {
          return {
            ...state,
            fretRange: {...state.fretRange, min: +e.target.value}
            }
        })
      }
    } else {
      if (e.target.value < trainingParameters.fretRange.min) {
        alert('choose value higher or equal to min');
      } else {
        setTrainingParameters((state) => {
          return {
            ...state,
            fretRange: {...state.fretRange, max: +e.target.value}
            }
        })
      }
    }
  }

  const [speed, setSpeed] = useState({setting: 1, value: 5000});
  const [play, setPlay] = useState(true);
  const timingLineRef = useRef(null)

  return <AppContext.Provider value={{
    trainingParameters,
    updateTrainingParameters,
    speed,
    setSpeed,
    play,
    setPlay,
    timingLineRef
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return (useContext(AppContext));
}