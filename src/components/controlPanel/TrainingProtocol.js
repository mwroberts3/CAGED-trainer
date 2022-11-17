import React from 'react'

const TrainingProtocol = () => {
  return <>
      <div className='position-range-control option-setting'>
        <h3>Fret Range:</h3>
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
  </>
}

export default TrainingProtocol