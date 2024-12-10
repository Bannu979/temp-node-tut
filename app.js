// npm - global command, comes with node
// npm --version
// local dependency - use it only in this particular project
// npm i <packageName>
// global dependency - use it in any project
// sudo install -g <packageName> (mac)

// package.json - manifest (stores important info about project/package)
// three ways to create json file
// manual approach (creating package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("loadash")

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);