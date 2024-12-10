// path module

const path = require('path')

console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
// if we want only name of the file
const base = path.basename(filePath)
console.log(base)
// if we want exact path name
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)