import repos from './../settings/repos'

// Add delay for testing purposes only
//
// const rand = (start = 1, end = 10) => parseInt(Math.random() * end) % (end-start+1) + start
// const done = ({repo, resolve}) => resolve(repo.getAll())
//
// const readRepo = (repo) =>
//   new Promise((resolve) => {
//       const seconds = rand(0, 0)
//       setTimeout(() =>
//         done({repo, resolve}), seconds * 1000
//       )
//     }
//   )

const R = require('ramda')
const onPrice = R.lensProp('price')
const pickSome = R.map(R.pick(['id','name','price']))
const addType = type => R.map(R.assoc('type', type))
const toFixed = number => number.toFixed(2)
const exchange = rate => R.compose(toFixed, R.multiply(rate))
const changeCurrency = rate => R.map(R.over(onPrice, exchange(rate)))
const transform = (rate, type) => R.compose(addType(type), changeCurrency(rate), pickSome)

const readRepo = (repo) =>
  new Promise((resolve) => resolve(repo.getAll()))

const getData = () => Promise.all(
  repos.map(async (repo) => ({ data: await readRepo(repo.name), type: repo.type})))

const consolidate = async (rate = 1) => {
  const data = await getData()
  return data.map(repo => transform(rate, repo.type)(repo.data))
}

export { transform }
export default consolidate
