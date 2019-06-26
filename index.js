// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, {key: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return driver[key] = value
}

