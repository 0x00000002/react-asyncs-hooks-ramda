import React from 'react'
import consolidate from './consolidate'
import settings from './../settings/'

const Render = () =>
  <div>
    <Table />
    <Table currency={'USD'} />
    <Table currency={'EUR'} />
  </div>

const Table = ({ currency = 'NZD' }) => {
  const rate = settings.rates[currency]
  return (
    <table className={'table table-striped'}>
      <thead>
        <tr>
          <td colSpan="3">Products ({currency})</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Type</td>
        </tr>
      </thead>
      <tbody>
        <TableContent rate={rate}/>
      </tbody>
    </table>
  )
}

const TableContent = ({rate}) => {
  const consolidatedRepos = consolidate(rate)
  return consolidatedRepos.map(repo =>
    repo.map((item, index) =>
      <TableLine key={index} item={item} />
    )
  )
}

const TableLine = ({ item }) =>
  <tr>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.type}</td>
  </tr>

export default Render
