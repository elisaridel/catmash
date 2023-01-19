import React from 'react'
import Image from './Image'

export default function ListElement(props) {
  return (
    <div className='list-element'>
      <Image url={props.url} id={props.id}></Image>
      <p>Nombre de votes : {props.votes}</p>
    </div>
  )
}
