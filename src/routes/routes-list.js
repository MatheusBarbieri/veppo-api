const _ = require('lodash')

const routes = [
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    info: {
      company: 'Fátima',
      route: 'Taquari/Tabaí',
      mode: 'Semi-direto',
      partTime: '07:15',
      price: 24,
      priceWithInsurance: 25,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'taquari',
    weekDays: [2, 3, 4, 5, 6],
    info: {
      company: 'Fátima',
      route: 'Taquari/Tabaí',
      mode: 'Comum',
      partTime: '09:15',
      price: 22,
      priceWithInsurance: 23,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'taquari',
    weekDays: [2, 3, 4, 5, 6, 7],
    info: {
      company: 'Fátima',
      route: 'Taquari/Tabaí',
      mode: 'Comum',
      partTime: '12:00',
      price: 22,
      priceWithInsurance: 23,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6, 7],
    info: {
      company: 'Fátima',
      route: 'Taquari/Tabaí',
      mode: 'Comum',
      partTime: '15:00',
      price: 22,
      priceWithInsurance: 23,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'taquari',
    isTarget: true,
    weekDays: [1, 7],
    info: {
      company: 'Fátima',
      route: 'Taquari',
      mode: 'Direto',
      partTime: '17:30',
      price: 26,
      priceWithInsurance: 27,
      travelDistance: 94,
      travelTime: 100
    }
  },

  {
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    info: {
      company: 'Fátima',
      route: 'Torres/Tramandaí',
      mode: 'Semi-direto',
      partTime: '07:15',
      price: 24,
      priceWithInsurance: 25,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6],
    info: {
      company: 'Fátima',
      route: 'Torres/Tramandaí',
      mode: 'Comum',
      partTime: '09:15',
      price: 22,
      priceWithInsurance: 23,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'torres',
    isTarget: true,
    weekDays: [2, 3, 4, 5, 6, 7],
    info: {
      company: 'Fátima',
      route: 'Torres/Tramandaí',
      mode: 'Comum',
      partTime: '12:00',
      price: 22,
      priceWithInsurance: 23,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'torres',
    weekDays: [2, 3, 4, 5, 6, 7],
    info: {
      company: 'Fátima',
      route: 'Torres/Tramandaí',
      mode: 'Comum',
      partTime: '15:00',
      price: 22,
      priceWithInsurance: 23,
      travelDistance: 94,
      travelTime: 100
    }
  },
  {
    city: 'torres',
    weekDays: [1, 7],
    info: {
      company: 'Fátima',
      route: 'Torres/Tramandaí',
      mode: 'Direto',
      partTime: '17:30',
      price: 26,
      priceWithInsurance: 27,
      travelDistance: 94,
      travelTime: 100
    }
  }
]

module.exports = (req, res) => {
  const { city, time = '00:00', weekday } = req.query
  const intWeekday = parseInt(weekday, 10)
  const routeList = _.compact(_.map(routes, (route) => {
    const isCity = route.city == city

    const routeTime = parseInt(route.info.partTime.substr(0, 2), 10) * 60
      + parseInt(route.info.partTime.substr(3, 5), 10)
    const reqTime = parseInt(time.substr(0, 2), 10) * 60 + parseInt(time.substr(3, 5), 10)
    isCity ? console.log(reqTime, routeTime) : null
    const onTimeRange = routeTime >= reqTime

    const onWeekday = intWeekday ? route.weekDays.includes(intWeekday) : true

    return (isCity && onTimeRange && onWeekday) ? route : false
  }))
  res.send(JSON.stringify(routeList))
}
