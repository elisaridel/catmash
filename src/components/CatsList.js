import React, { useEffect, useState } from 'react'
import Api from './Api'
import Header from './Header'
import ListElement from './ListElement'

export default function CatsList() {
  const [cats, setCats] = useState()

  useEffect(() => {
    Api.get(`?_sort=votes&_order=desc`)
    .then((response) => {
        setCats(response.data)
    })
  }, [])

  return (
    <div className='limited-content'>
      <Header />
      <div className='cats-list--container'>
        {cats && cats.map(cat =>
          <div className='contestant--container'>
            <ListElement url={cat.url} votes={cat.votes} id={cat.id} />
          </div>
        )}
      </div>
    </div>
  )
}
