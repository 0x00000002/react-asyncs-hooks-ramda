import React, { Component } from 'react'
import consolidate from './consolidate'
import settings from './../settings/'

class Render extends Component {
  state = {
    NZD: null,
    USD: null,
    EUR: null,
    loaded: false
  }


  async componentDidMount () {
    const rates = ['NZD', 'USD', 'EUR']
    Promise.all(rates.map(curr => consolidate(settings.rates[curr])))
      .then(data => {
        this.setState({ NZD: data[0] })
        this.setState({ USD: data[1] })
        this.setState({ EUR: data[2] })
        this.setState({ loaded: true })
      }
    )
  }

  render() {
    return(
      <div>
        { !this.state.loaded && <h2>Loading, please wait ...</h2> }
        { this.state.loaded &&
          <section>
            <Table currency={'NZD'} data={this.state.NZD}/>
            <Table currency={'USD'} data={this.state.USD}/>
            <Table currency={'EUR'} data={this.state.EUR}/>
          </section>
        }
      </div>
    )
  }
}


const Table = ({ currency, data }) => {
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

export default Render
