import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Star.css'

function Star({selfRating}) {
    const stars=Array(10).fill(0)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue,setHoverValue]=useState(undefined);
    const [clicked,setClicked]=useState(false)

    const colors={
      yellow: '#FFBA5A',
      grey: '#a9a9a9'
    }

  return (
    <div className='star'>
        {stars.map((_,index)=>{
            return(
                <FaStar key={index}
                color={(hoverValue|| currentValue) > index ? colors.yellow : colors.grey}
                onClick={()=>{setCurrentValue(index+1);setClicked(true)}}
                onMouseOver={()=>{setHoverValue(index+1);setClicked(false)}}
                onMouseLeave={()=>{setHoverValue(undefined);setClicked(true);selfRating(currentValue)}}
                />
            )
        })}
        <div className='number-of-stars'>
        {clicked ? currentValue : hoverValue}
        </div>
    </div>
  )
}

export default Star