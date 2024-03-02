console.log('hello world');

const os = require('os')
const path = require('path')

// import module
//const math = require('./math')

// use when callings standard import module
//console.log(math.add(2, 3))


// import module destructured
const { add, subtract, multiply, divide } = require('./math')
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))



/* console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename)) */