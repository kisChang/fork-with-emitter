const { master } = require('../../dist/index')

const sleep = ms => new Promise(res => setTimeout(res, ms))

master.on('hello', name => {
  console.log(`Hello ${name}`)
})

master.on('getRandomNumber', async () => {
  await sleep(1000)
  return Math.floor(Math.random() * 1000)
})