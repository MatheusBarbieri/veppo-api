const cities = [
  {
    label: 'Taquari',
    value: 'taquari',
    basePrice: 20,
    kilogramPrice: 5
  },
  {
    label: 'Torres',
    value: 'torres',
    basePrice: 15,
    kilogramPrice: 2
  }
]

module.exports = (req, res) => {
  res.send(JSON.stringify(cities))
}
