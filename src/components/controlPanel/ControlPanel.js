import React from 'react'

const ControlPanel = () => {
  return (
    <div className='control-panel-container'>
      <div className='volume-control option-setting'>volume</div>
      <div className='bpm-control option-setting'>bpm</div>
      <div className='position-range-control option-setting'>
        <label>Min:</label>
        <select>
          <option>open</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>
        <label>Max:</label>
        <select>
          <option>open</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>
      </div>
      <div className='type-control option-setting'>
        <label>Type:</label>
        <select>
          <option>chords</option>
          <option>scales</option>
          <option>mix</option>
        </select>
      </div>
    </div>
  )
}

export default ControlPanel