const _ = require('lodash')

const routes = [
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Semi-direto',
    partTime: '07:15',
    price: 24,
    priceWithInsurance: 25,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [4, 5, 6],
    company: 'Fátima',
    route: 'Triunfo/Taquari',
    mode: 'Semi-direto',
    partTime: '07:40',
    price: 20,
    priceWithInsurance: 21,
    travelDistance: 105,
    travelTime: 120
  },
  {
    city: 'taquari',
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Comum',
    partTime: '09:15',
    price: 22,
    priceWithInsurance: 23,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'taquari',
    weekDays: [1, 2, 3, 4, 5, 6, 7],
    company: 'Azul',
    route: 'Taquari/Lajeado',
    mode: 'Direto',
    partTime: '09:40',
    price: 30,
    priceWithInsurance: 32,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'taquari',
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Comum',
    partTime: '12:00',
    price: 22,
    priceWithInsurance: 23,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Comum',
    partTime: '15:00',
    price: 22,
    priceWithInsurance: 23,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [1, 7],
    company: 'Fátima',
    route: 'Triunfo/Taquari',
    mode: 'Semi-direto',
    partTime: '15:00',
    price: 24,
    priceWithInsurance: 26,
    travelDistance: 105,
    travelTime: 120
  },
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [1, 7],
    company: 'Fátima',
    route: 'Taquari',
    mode: 'Direto',
    partTime: '17:30',
    price: 26,
    priceWithInsurance: 27,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'taquari',
    weekDays: [1, 7],
    company: 'Azul',
    route: 'Taquari/Lajeado',
    mode: 'Direto',
    partTime: '19:10',
    price: 30,
    priceWithInsurance: 32,
    travelDistance: 94,
    travelTime: 100
  },

  {
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Semi-direto',
    partTime: '07:15',
    price: 24,
    priceWithInsurance: 25,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Comum',
    partTime: '09:15',
    price: 22,
    priceWithInsurance: 23,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Comum',
    partTime: '12:00',
    price: 22,
    priceWithInsurance: 23,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'torres',
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Comum',
    partTime: '15:00',
    price: 22,
    priceWithInsurance: 23,
    travelDistance: 94,
    travelTime: 100
  },
  {
    city: 'torres',
    weekDays: [1, 7],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Direto',
    partTime: '17:30',
    price: 26,
    priceWithInsurance: 27,
    travelDistance: 94,
    travelTime: 100
  }
]

module.exports = (req, res) => {
  const { city } = req.query
  const routeList = _.compact(_.map(routes,
    (route) => (route.city == city ? route : null)))
  res.send(JSON.stringify(routeList))
}
