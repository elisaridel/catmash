import React from 'react'

export default function Image(props) {
  return (
    <img className='image' src={props.url} alt={`contestant ${props.id}`} style={{ transform: `scale(${props.scale})` }} onClick={props.clickEvent}/>
  )
}
