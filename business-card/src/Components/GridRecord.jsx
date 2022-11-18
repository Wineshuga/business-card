import React from 'react'
import CallImage from "../Assets/callImage.png"

const GridRecord = (props) => {
  return (
    <div>
      <div className="grid-recordname">
        <img src={CallImage} alt="" />
        <div className='name'>
            <h5>{props.name}</h5>
            <p>{props.lenght}</p>
        </div>
      </div>
      <div className='analysis'>
        <h5>{props.analysis}</h5>
        <p>{props.date}</p>
      </div>
    </div>
  )
}

export default GridRecord
