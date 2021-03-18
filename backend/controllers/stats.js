const statsRouter = require('express').Router()
const Stat = require('../models/stat')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

statsRouter.get('/statsfromapitodatabase', async (_req, _res) => {

  let apiPageNumber = 11298
  //1-11298
  //11298-11301
  const getStats = async () => {
    let stats = []
    //let apiPageNumber = 1
    const apiPerPage = 100
    const total_pages = 11301
    while (apiPageNumber <= total_pages) {
      console.log(`getting stats, page ${apiPageNumber}`)
      let statsOnOnePage = await axios.get(`${baseUrl}?per_page=${apiPerPage}&page=${apiPageNumber}`)
      stats = stats.concat(statsOnOnePage.data.data)
      if (apiPageNumber % 100 === 0 || apiPageNumber === total_pages) {
        console.log('saving stats to database...')
        for (const stat of stats) {
          const filter = { id: stat.id }
          const options = { upsert: true }
          const updateDoc = { $set: stat }
          const savedStat = await Stat.updateOne(filter, updateDoc, options)
          console.log('updated / added', savedStat.id, 'to database')
        }
        console.log('finished saving stats to database')
        /* console.log('saving stats to database...')
        await Stat.insertMany(stats)
        stats = []
        console.log('finished saving stats to database') */
      }
      apiPageNumber = apiPageNumber + 1
      //timer to prevent status code 429 (Too Many Requests)
      setTimeout(() => 1100)
    }
    return stats
  }
  const putStatsToDatabase = async (stats) => {
    /* const newStats = stats.map(({ first_name: firstName, last_name: lastName, id: apiId, team: team }) =>
      ({ firstName, lastName, apiId, team })) */
    console.log('saving stats to database...')
    await Stat.insertMany(stats)
    console.log('finished saving stats to database')
  }
  await getStats()
  //const stats = await getStats()
  //await putStatsToDatabase(stats)
})

module.exports = statsRouter