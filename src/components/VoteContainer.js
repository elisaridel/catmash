import React, { useEffect, useState } from 'react'
import Api from "./Api";
import ContestantImage from './Image'
import TextContainer from './TextContainer';

export default function VoteContainer() {
  const [contestants, setContestants] = useState();
  const [winner, setWinner] = useState();

  useEffect(() => {
    const randoms = [];

    Api.get('/')
    .then((response) => {
      let i = 0
        // Get two random cats from the API
        while (i < 2) {
          const random = Math.floor(Math.random() * response.data.length);

          if (randoms.indexOf(random) === -1) {
            randoms.push(random)
            i++
          }
        }
        setContestants(randoms.map(random => response.data[random]))
    })
  }, [winner]);

  const setVote = (id, vote) => {
    Api.patch(`/${id}`, {"votes": vote});
    setWinner(id);
  }

  return (
    <div className='vote-container'>
      {contestants && contestants.map(contestant =>
        <div className='contestant--container'>
          <ContestantImage url={contestant.url} id={contestant.id} clickEvent={() => setVote(contestant.id, contestant.votes + 1)}/>
        </div>
      )}
      <TextContainer text="or" class='round--container'/>
    </div>
  )
}
