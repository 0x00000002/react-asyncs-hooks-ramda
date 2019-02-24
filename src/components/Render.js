import React, { useState, useEffect } from 'react'
import consolidate from './consolidate'
import Table from './Table'
import { common } from './../settings/'

const rates = common.rates

const Render = () => {

  const [data, setData] = useState([])
  const [started, start] = useState(false)
  const [loaded, complete] = useState(false)

  useEffect(() => {
    const currencies = Object.keys(rates)
    !started && Promise.all(currencies
      .map(currency =>
        consolidate(rates[currency])
          .then(repo => ({ currency, data: repo }))
      )
    )
    .then((repos) => {
      setData(repos)
    })
    start(true)
    data.length === currencies.length ? complete(true) : complete(false)
  });

  return(
    <div>
      { !loaded && <h2>Loading, please wait ...</h2> }
      { loaded &&
        data.map(({currency, data}, idx) =>
          <Table key={idx} currency={currency} data={data}/>)
      }
    </div>
  )
}

export default Render
