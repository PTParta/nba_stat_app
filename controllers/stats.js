const statsRouter = require('express').Router()
const Stat = require('../models/stat')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'
//const colors = require('colors')

statsRouter.get('/statsfromapitodatabase', async (_req, res) => {

  const getStats = async () => {

    let statusMessage = ''
    const apiPerPage = 100

    const documentsCountInDatabaseBeforeAdding = await Stat.count()
    console.log('documents in database before adding:', documentsCountInDatabaseBeforeAdding)

    let statsOnFirstPage = await axios.get(`${baseUrl}?per_page=${apiPerPage}`)
    const totalAmountDocumentsInApi = statsOnFirstPage.data.meta.total_count
    console.log('total amount of documents in API:', totalAmountDocumentsInApi)

    if (documentsCountInDatabaseBeforeAdding === totalAmountDocumentsInApi) {
      statusMessage = 'Database is up to date. No need to transfer data from API to database'
      console.log(statusMessage)
      return statusMessage
    }

    const totalPages = statsOnFirstPage.data.meta.total_pages + 1
    let startingPageNumber = totalPages - Math.floor((totalAmountDocumentsInApi - documentsCountInDatabaseBeforeAdding) / 100) - 20
    let stats = []

    let apiPageNumber = startingPageNumber
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
        }
        stats = []
        console.log('finished saving stats to database')
      }
      apiPageNumber = apiPageNumber + 1
      //timer to prevent status code 429 (Too Many Requests)
      setTimeout(() => 1100)
    }
    const documentsCountInDatabaseAfterAdding = await Stat.count()


    if (documentsCountInDatabaseAfterAdding === totalAmountDocumentsInApi) {
      statusMessage = 'Data successfully moved from API to database. Document count in API and database are the same.'
    } else {
      statusMessage = 'Error in moving data from API to database. Document count in API and database is not the same.'
    }
    console.log(statusMessage)
    return statusMessage
  }
  res.send(await getStats())
})

module.exports = statsRouter