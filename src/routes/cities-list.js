const cities = [
  {
    label: 'Taquari',
    value: 'taquari'
  },
  {
    label: 'Torres',
    value: 'torres'
  }
]

module.exports = (req, res) => {
  res.send(JSON.stringify(cities))
}
