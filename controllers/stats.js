const statsRouter = require('express').Router()
const Stat = require('../models/stat')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

statsRouter.get('/statsfromapitodatabase', async (_req, _res) => {



  //1-11298
  //11298-11301
  //11301-11311
  const getStats = async () => {

    const apiPerPage = 100

    const documentsCountInDatabaseBeforeAdding = await Stat.count()
    console.log('documents in database before adding:', documentsCountInDatabaseBeforeAdding)

    //let apiPageNumber = 11295

    let statsOnFirstPage = await axios.get(`${baseUrl}?per_page=${apiPerPage}`)
    const totalAmountDocumentsInApi = statsOnFirstPage.data.meta.total_count
    console.log('total amount of documents in API:', totalAmountDocumentsInApi)

    const totalPages = statsOnFirstPage.data.meta.total_pages + 1
    let startingPageNumber = totalPages - Math.floor((totalAmountDocumentsInApi - documentsCountInDatabaseBeforeAdding) / 100) - 2
    let stats = []

    let apiPageNumber = startingPageNumber
    //const total_pages = 11312
    while (apiPageNumber <= totalPages) {
      console.log(`getting stats, page ${apiPageNumber}`)
      let statsOnOnePage = await axios.get(`${baseUrl}?per_page=${apiPerPage}&page=${apiPageNumber}`)
      stats = stats.concat(statsOnOnePage.data.data)
      if (apiPageNumber % 100 === 0 || apiPageNumber === totalPages) {
        console.log('saving stats to database...')
        for (const stat of stats) {
          const filter = { id: stat.id }
          const options = { upsert: true }
          const updateDoc = { $set: stat }
          await Stat.updateOne(filter, updateDoc, options)
          //console.log('updated / added', savedStat, 'to database')
        }
        stats = []
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
    const documentsCountInDatabaseAfterAdding = await Stat.count()

    if (documentsCountInDatabaseAfterAdding === totalAmountDocumentsInApi) {
      console.log('Data successfully moved from API to database. Document count in API and database are the same')
    } else {
      console.log('Error in moving data from API to database. Document count in API and database is not the same')
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