import React from 'react'
import Logo from '../assets/img/paw_logo.png'
import Title from './Title'
import Image from './Image';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <Image url={Logo} />
        <Title text='CatMash'/>
      </Link>
    </header>
  )
}