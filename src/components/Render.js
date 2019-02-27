import React, { useState, useEffect } from 'react'
import consolidate from './consolidate'
import Table from './Table'
import { common } from './../settings/'

const Render = () => {
  const [data, setData] = useState([])
  const [started, start] = useState(false)
  const [loaded, complete] = useState(false)

  useEffect(() => {
    const currencies = Object.keys(common.rates)
    !started && Promise.all(currencies
      .map(currency =>
        consolidate(common.rates[currency])
          .then(repo => ({ currency, data: repo }))
      )
    )
    .then((repos) => {
      setData(repos)
      complete(true)
    })
    start(true)
  });

  return(
    <div title={'content'}>
      { !loaded && <h2>Loading, please wait ...</h2> }
      { loaded &&
        data.map(({currency, data}, idx) =>
          <Table key={idx} currency={currency} data={data}/>)
      }
    </div>
  )
}

export default Render
