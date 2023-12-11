import _ from 'lodash'

//const numbers = [1, 2, 3, 4, 5]

// const doubledNumbers = _.map(numbers, num => num * 2)
//const doubledNumbers = numbers.map(num => num * 2)
//const a = _.map(numbers, num => num * 10)
const birthYear = [1975, 1977, 2002, 1995, 1985]

const ages = _.map(birthYear, year => 2023 - year)
//console.log(doubledNumbers)
//console.log(a)


const currentYear = 2023


const driverLicense = _.map(birthYear, year => year + 18)

console.log(driverLicense)