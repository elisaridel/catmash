import React from 'react'
import VoteContainer from './VoteContainer';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Homepage() {
  return (
    <div className='homepage limited-content'>
      <VoteContainer></VoteContainer>
      <Link to='/cats' className='list-link'><Button text='Voir tous les chats'></Button></Link>
    </div>
  )
}