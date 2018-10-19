const cities = [
  'taquari',
  'torres'
]
module.exports = (req, res) => {
  res.send(JSON.stringify(cities))
}
