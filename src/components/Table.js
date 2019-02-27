import React from 'react'

const Table = ({ currency, data }) => {
  return (
    <table className={'table table-striped'}>
      <thead>
      <tr>
        <td title={'currency'} colSpan="3">Products ({currency})</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Price</td>
        <td>Type</td>
      </tr>
      </thead>
      <tbody>
      <TableContent repos={data}/>
      </tbody>
    </table>
  )
}

const TableContent = ({repos}) =>
  repos.map(repo =>
    repo.map((item, index) =>
      <TableLine key={index} item={item} />
    ))

const TableLine = ({ item }) =>
  <tr>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.type}</td>
  </tr>

export default Table
