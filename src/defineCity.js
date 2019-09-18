const cities = require('./cities.json');

module.exports = () => {
  const cityIndex = Math.floor(Math.random() * Math.floor(cities.length));

  return cities[cityIndex]
}
