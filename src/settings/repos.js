import LawnmowerRepository from '../repos/LawnmowerRepository'
import PhoneCaseRepository from '../repos/PhoneCaseRepository'
import TShirtRepository from '../repos/TShirtRepository'

const lawnmowers = new LawnmowerRepository()
const phoneCases = new PhoneCaseRepository()
const tShirts = new TShirtRepository()

const repos = [
  { name: lawnmowers, type: 'Lawnmowers' },
  { name: phoneCases, type: 'Phone cases' },
  { name: tShirts, type: 'T-Shirts' }
]

export default repos

