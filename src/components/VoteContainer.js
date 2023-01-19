import React, { useEffect, useState } from 'react'
import Api from "./Api";
import ContestantImage from './Image'
import TextContainer from './TextContainer';

export default function VoteContainer() {
  const [contestants, setContestants] = useState();

  useEffect(() => {
    const randoms = [];

    Api.get('/')
    .then((response) => {
      let i = 0
        while (i < 2) {
          const random = Math.floor(Math.random() * response.data.length);
          console.log(randoms.indexOf(random));
          if (randoms.indexOf(random) === -1) {
            randoms.push(random)
            i++
          }
        }
        setContestants(randoms.map(random => response.data[random]))
    })
  }, []);

  return (
    <div className='vote-container'>
      {contestants && contestants.map(contestant =>
        <div className='contestant--container'>
          <ContestantImage url={contestant.url} id={contestant.id} />
        </div>
      )}
      <TextContainer text="or" class='round--container'/>
    </div>
  )
}
