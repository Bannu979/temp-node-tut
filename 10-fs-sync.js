// fs module (async and(non blocking), sync (blocking))
const {readFileSync, writeFileSync} = require('fs')
// reading a file
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first, second)
// write to a file , if a file is not there it will create a new file and write it
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})
console.log('done with this task');
console.log('starting the next one');