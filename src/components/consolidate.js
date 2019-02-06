import PhoneCaseRepository from '../repos/PhoneCaseRepository'
import TShirtRepository from '../repos/TShirtRepository'
import LawnmowerRepository from '../repos/LawnmowerRepository'

const R = require('ramda')

const lawnmowers = new LawnmowerRepository()
const phoneCases = new PhoneCaseRepository()
const tShirts = new TShirtRepository()

const repos = [
  {
    'type': 'Lawnmower',
    'data': lawnmowers.getAll()
  },
  {
    'type': 'Phone Case',
    'data': phoneCases.getAll()
  },
  {
    'type': 'T-Shirt',
    'data': tShirts.getAll()
  }
]

const toFixed = number => number.toFixed(2)
const exchange = rate => R.compose(toFixed, R.multiply(rate))
const currency = rate => R.map(R.over(R.lensProp('price'), exchange(rate)))
const pick = R.map(R.pick(['id','name','price']))
const addType = type => R.map(R.assoc('type', type))
const transform = (rate, type) => R.compose(addType(type), currency(rate), pick)
const consolidate = (rate = 1) => repos.map(repo => (transform(rate, repo.type)(repo.data)))

export { transform }
export default consolidate


