import React from 'react'
import VoteContainer from './VoteContainer';
import { Link } from 'react-router-dom';
import Button from './Button';
import Header from './Header';

export default function Homepage() {
  return (
    <div className='homepage limited-content'>
      <Header />
      <VoteContainer></VoteContainer>
      <Link to='/cats' className='list-link'><Button text='Voir tous les chats'></Button></Link>
    </div>
  )
}