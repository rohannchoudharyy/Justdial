import React from 'react'
import './SliderCard.css'

function SliderCard({pic,head,title}) {
    return (
        <div className='h-56 slidercard'>
            <img src={pic} alt="" />
            <h2>{head}</h2>
            <p>{title}</p>
            <button>Explore &#62;</button>
        </div>
    )
}

export default SliderCard