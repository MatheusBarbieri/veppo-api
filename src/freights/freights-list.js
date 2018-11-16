const _ = require('lodash')

const routes = [
  {
    city: 'taquari',
    isTarget: true,
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 20,
    price: 40,
  },
  {
    city: 'taquari',
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 40,
    price: 80,
  },
  {
    city: 'taquari',
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 80,
    price: 160,
  },
  {
    city: 'taquari',
    isTarget: true,
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 160,
    price: 320,
  },
  {
    city: 'taquari',
    isTarget: true,
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 320,
    price: 640,
  },
  {
    city: 'torres',
    isTarget: true,
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 20,
    price: 40,
  },
  {
    city: 'torres',
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 40,
    price: 80,
  },
  {
    city: 'torres',
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 80,
    price: 160,
  },
  {
    city: 'torres',
    isTarget: true,
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 160,
    price: 320,
  },
  {
    city: 'torres',
    isTarget: true,
    weight: [1, 5, 10, 15, 20, 25, 30],
    value: 320,
    price: 640,
  }
]

module.exports = (req, res) => {
  const { city } = req.query
  const routeList = _.compact(_.map(routes,
    (route) => (route.city == city ? route : null)))
  res.send(JSON.stringify(routeList))
}
