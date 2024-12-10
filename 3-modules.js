// Modules
// CommonJs :- Every file is a module (by default)
// Modules :- modules Encapsulated the  Code (only share minimum information, what we want)

const names = require('./4-names')
// const {john, peter} = require('./4-names')

const sayhai = require('./5-utils')
// /console.log(names.john)
// console.log(names.peter)
sayhai('bannu')
sayhai(names.john)
sayhai(names.peter)

// alternative.js
// const data = require('./6-alternative-flavour')
// console.log(data)

// mind-grenade.js
//  const data = require('./7-mind-grenade')
//  console.log(data)
require('./7-mind-grenade')