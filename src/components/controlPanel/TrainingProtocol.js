import React from 'react'
import { useGlobalContext } from '../../context';

const TrainingProtocol = () => {
  const { trainingParameters, updateTrainingParameters } = useGlobalContext();

  return <>
      <div className='position-range-control option-setting'>
        <label>Min </label>
        <select id='min-select' value={trainingParameters.fretRange.min} onChange={updateTrainingParameters}>
          <option value={0}>open</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
        </select>
        <label>Max </label>
        <select id='max-select' value={trainingParameters.fretRange.max} onChange={updateTrainingParameters}>
          <option value={0}>open</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
        </select>
      </div>
      <div className='show-form-control option-setting'>
        <label>Show Form</label>
        <input type='checkbox' />
      </div>
      <div className='type-control option-setting'>
        <label>Type </label>
        <select>
          <option>chords</option>
          <option>scales</option>
          <option>mix</option>
        </select>
      </div>
  </>
}

export default TrainingProtocol