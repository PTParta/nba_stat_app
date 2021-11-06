const statsRouter = require('express').Router()
const Stat = require('../models/stat')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'
const nodeoutlook = require('nodejs-nodemailer-outlook')
require('dotenv').config()
//const colors = require('colors')

statsRouter.get('/statsfromapitodatabase', async (_req, res) => {

  const sendEmail = (subject, text) => {
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      text: text,
      onError: (e) => console.log(e),
      onSuccess: (i) => console.log(i)
    }
    );
  }

  const getStats = async () => {

    /**
     * API data has preseason and play-in games which has to be taken into account when counting if
     * the amount of data in the database matches the API. As of 05.11.2021 the API has 350 more
     * data than the database. 2021 preseason games have been removed from the database but the
     * previous seasons' database has not been corrected.
     */
    const amountOfDataMoreInApiThanDatabase = 350
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
      sendEmail('Data from api to database', statusMessage)
      return statusMessage
    }

    const totalPages = statsOnFirstPage.data.meta.total_pages + 1
    let startingPageNumber = totalPages - Math.floor((totalAmountDocumentsInApi - documentsCountInDatabaseBeforeAdding) / 100) - 2
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

    if (documentsCountInDatabaseAfterAdding === totalAmountDocumentsInApi - amountOfDataMoreInApiThanDatabase) {
      statusMessage = 'Data successfully moved from API to database. Document count in API and database are the same.'
    } else {
      statusMessage = 'Error in moving data from API to database. Document count in API and database is not the same.'
    }
    sendEmail('Data from api to database', statusMessage)
    console.log(statusMessage)
    return statusMessage
  }
  res.send(await getStats())
})

module.exports = statsRouter