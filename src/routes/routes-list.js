const _ = require('lodash')

const routeId = (function routeIdClosure() {
  let id = 3000
  return () => {
    id += 3
    return id
  }
}())

const routes = [
  {
    routeId: routeId(),
    city: 'taquari',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Semi-direto',
    partTime: '07:15',
    price: '24,00',
    priceWithInsurance: '25,00',
    travelDistance: 94,
    travelTime: 94
  },
  {
    routeId: routeId(),
    city: 'taquari',
    isTarget: true,
    weekDays: [4, 5, 6],
    company: 'Fátima',
    route: 'Triunfo/Taquari',
    mode: 'Semi-direto',
    partTime: '07:40',
    price: '20,00',
    priceWithInsurance: '21,00',
    travelDistance: 105,
    travelTime: 120
  },
  {
    routeId: routeId(),
    city: 'taquari',
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Comum',
    partTime: '09:15',
    price: '22,00',
    priceWithInsurance: '23,00',
    travelDistance: 94,
    travelTime: 61
  },
  {
    routeId: routeId(),
    city: 'taquari',
    weekDays: [1, 2, 3, 4, 5, 6, 7],
    company: 'Azul',
    route: 'Taquari/Lajeado',
    mode: 'Direto',
    partTime: '09:40',
    price: '30,00',
    priceWithInsurance: '32,00',
    travelDistance: 94,
    travelTime: 60
  },
  {
    routeId: routeId(),
    city: 'taquari',
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Comum',
    partTime: '12:00',
    price: '22,00',
    priceWithInsurance: '23,00',
    travelDistance: 94,
    travelTime: 45
  },
  {
    routeId: routeId(),
    city: 'taquari',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Taquari/Tabaí',
    mode: 'Comum',
    partTime: '15:00',
    price: '22,00',
    priceWithInsurance: '23,00',
    travelDistance: 94,
    travelTime: 100
  },
  {
    routeId: routeId(),
    city: 'taquari',
    isTarget: true,
    weekDays: [1, 7],
    company: 'Fátima',
    route: 'Triunfo/Taquari',
    mode: 'Semi-direto',
    partTime: '15:00',
    price: '24,00',
    priceWithInsurance: '26,00',
    travelDistance: 105,
    travelTime: 120
  },
  {
    routeId: routeId(),
    city: 'taquari',
    isTarget: true,
    weekDays: [1, 7],
    company: 'Fátima',
    route: 'Taquari',
    mode: 'Direto',
    partTime: '17:30',
    price: '26,00',
    priceWithInsurance: '27,00',
    travelDistance: 94,
    travelTime: 100
  },
  {
    routeId: routeId(),
    city: 'taquari',
    weekDays: [1, 7],
    company: 'Azul',
    route: 'Taquari/Lajeado',
    mode: 'Direto',
    partTime: '19:10',
    price: '30,00',
    priceWithInsurance: '32,00',
    travelDistance: 94,
    travelTime: 100
  },

  {
    routeId: routeId(),
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Semi-direto',
    partTime: '07:15',
    price: '24,00',
    priceWithInsurance: '25,00',
    travelDistance: 94,
    travelTime: 100
  },
  {
    routeId: routeId(),
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Comum',
    partTime: '09:15',
    price: '22,00',
    priceWithInsurance: '23,00',
    travelDistance: 94,
    travelTime: 100
  },
  {
    routeId: routeId(),
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Comum',
    partTime: '12:00',
    price: '22,00',
    priceWithInsurance: '23,00',
    travelDistance: 94,
    travelTime: 100
  },
  {
    routeId: routeId(),
    city: 'torres',
    weekDays: [2, 3, 4, 5, 6, 7],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Comum',
    partTime: '15:00',
    price: '22,00',
    priceWithInsurance: '23,00',
    travelDistance: 94,
    travelTime: 100
  },
  {
    routeId: routeId(),
    city: 'torres',
    weekDays: [1, 7],
    company: 'Fátima',
    route: 'Torres/Tramandaí',
    mode: 'Direto',
    partTime: '17:30',
    price: '26,00',
    priceWithInsurance: '27,00',
    travelDistance: 94,
    travelTime: 100
  }
]

module.exports = (req, res) => {
  const { city } = req.query
  const routeList = _.compact(_.map(routes,
    (route) => (route.city == city ? route : null)))
  setTimeout(() => {
    res.send(JSON.stringify(routeList))
  }, 1500)
}
