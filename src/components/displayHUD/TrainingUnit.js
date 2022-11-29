import React from 'react'
import { useGlobalContext } from '../../context';

const TrainingUnit = ({unitInfo, alwaysShowForm}) => {
  const {form, position, chord} = unitInfo;
  const { trainingParameters } = useGlobalContext();

  return (
    <div className='training-unit'>
      {trainingParameters.showForm || alwaysShowForm ? <p>{form}</p> : <p>&nbsp;</p>}
      <p>{position}</p>
      <p>{chord}</p>
    </div>
  )
}

export default TrainingUnit