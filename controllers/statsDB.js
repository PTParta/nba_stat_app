const { v4: uuidv4 } = require('uuid')

const statDBRouter = require('express').Router()
const Stat = require('../models/stat')
const Summary = require('../models/summary')
const Log = require('../models/log')
const PlayerLog = require('../models/playerLog')

const nodeoutlook = require('nodejs-nodemailer-outlook')
require('dotenv').config()

//const axios = require('axios')
//const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

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
		//onError: (e) => console.log(e),
		//onSuccess: (i) => console.log(i)
	}
	);
}

statDBRouter.get('/statsfromdb/:playerid', async (request, response) => {
	const stats = await Stat.find({
		'player.id': request.params.playerid,
		'min': { $ne: null },
		'game.season': { $gt: 1982 }
		/* 'min': { $ne: [null, '0'] } */ //This query is too slow and does not work
	})
	const playerFullName = `${stats[0].player.first_name} ${stats[0].player.last_name}`

	sendEmail(`Career stats ${playerFullName} retrieved from database`)

	response.json(stats)

	try {
		const filter = { name: playerFullName }
		const options = { upsert: true }
		const updateDoc = { $inc: { counter: 1 } }
		await PlayerLog.updateOne(filter, updateDoc, options)
	} catch (err) { console.log(err) }


	const timeOfRequest = new Date()
	const date = `${timeOfRequest.getDate()}.${timeOfRequest.getMonth()}.${timeOfRequest.getFullYear()}`
	const time = `${timeOfRequest.getHours()}:${timeOfRequest.getMinutes()}.${timeOfRequest.getSeconds()}`
	try {
		await Log.create({ type: "career", playerFullName: playerFullName, timeOfRequest: time, dateOfRequest: date })
	} catch (err) { console.log(err) }


})

statDBRouter.get('/teamstatsfromdb/:teamid/:season', async (request, response) => {
	const stats = await Stat.find({
		'team.id': request.params.teamid,
		'game.season': request.params.season,
		'min': { $ne: null }
	})

	const teamName = `${stats[0].team.name}`


	sendEmail(`Team stats ${teamName} ${request.params.season} retrieved from database`)

	response.json(stats)
	const timeOfRequest = new Date()
	const date = `${timeOfRequest.getDate()}.${timeOfRequest.getMonth()}.${timeOfRequest.getFullYear()}`
	const time = `${timeOfRequest.getHours()}:${timeOfRequest.getMinutes()}.${timeOfRequest.getSeconds()}`
	try {
		await Log.create({ type: "team", team: teamName, year: request.params.season, timeOfRequest: time, dateOfRequest: date })
	} catch (err) { console.log(err) }
})

statDBRouter.get('/playerstatsforaseasonfromdb/:playerid/:season', async (request, response) => {
	const stats = await Stat.find({
		'game.season': request.params.season,
		'min': { $ne: null },
		'player.id': request.params.playerid
	})

	sendEmail(`Player stats for ${stats[0].player.first_name} ${stats[0].player.last_name} ${request.params.season} retrieved from database`)

	response.json(stats)
})

statDBRouter.get('/selectedplayersidsforaseasonfromdb/:season', async (request, response) => {
	const stats = await Stat.distinct(
		'player.id',
		{
			'game.season': request.params.season,
			'min': { $ne: null }
		}
	)

	response.json(stats)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////
7
statDBRouter.get('/allplayerstatsforaseasonfromdb', async (request, response) => {

	const updateSummaryData = async () => {

		// During regular season postseason has to be false and during post season postseason has to be true.
		const postseason = false

		//for (let season = 1983; season <= 2020; season++) {
		for (let season = 2021; season <= 2021; season++) {
			console.log('getting all stats for a season from database')
			console.log(':season', season)

			let startTime = new Date().getTime()

			let statsFromDB = await Stat.find({
				'game.season': season,
				'game.postseason': postseason,
				'min': { $ne: null }
			})

			let endTime = new Date().getTime()
			console.log('finished retrieving data from database')
			console.log(`time ${endTime - startTime} ms`)
			console.log('documents:', statsFromDB.length)

			//filter out bad data where player is not defined
			statsFromDB = statsFromDB.filter(stat => stat.player !== undefined)
			let playerStats = []
			statsFromDB.forEach(stat => {
				const playerFullName = `${stat.player.first_name} ${stat.player.last_name}`
				if (playerStats.find(stat => stat.name === playerFullName) === undefined) {
					const player = { name: playerFullName, playerId: stat.player.id }
					//console.log(player.name)
					if (player.name !== undefined) {
						playerStats.push(player)
					}

				}
			})
			console.log(playerStats)


			const playerStatsFiltered = statsFromDB/* .filter(teamStat => teamStat.game.postseason === postseason) */
			let j = 1
			playerStats.forEach(playerStat => {
				console.log(j)
				j++
				let playedGames = 0
				const playerStatsHelper = playerStatsFiltered
					.filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === playerStat.name)

				const totalPts = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.pts
				}, 0)
				const totalAst = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.ast
				}, 0)
				const totalReb = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.reb
				}, 0)
				const totalStl = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.stl
				}, 0)
				const totalBlk = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.blk
				}, 0)
				const totalTurnover = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.turnover
				}, 0)
				const totalPf = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.pf
				}, 0)
				const totalMin = playerStatsHelper.reduce((accumulator, currentValue) => {
					let minutes = 0
					const timeSplit = currentValue.min.split(':')
					if (timeSplit.length === 1) {
						minutes = Number(currentValue.min)
					} else {
						const seconds = Number(timeSplit[0]) * 60 + Number(timeSplit[1])
						//minutes = Math.floor(seconds / 60)
						minutes = Math.round(seconds / 60 * 10) / 10
					}
					if (isNaN(minutes)) {
						minutes = 0
					}
					if (minutes !== 0) {
						playedGames++
					}
					return accumulator + minutes
				}, 0)
				const totalFga = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.fga
				}, 0)
				const totalFgm = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.fgm
				}, 0)
				const totalFg3a = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.fg3a
				}, 0)
				const totalFg3m = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.fg3m
				}, 0)
				const totalFta = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.fta
				}, 0)
				const totalFtm = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.ftm
				}, 0)
				const totalOreb = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.oreb
				}, 0)
				const totalDreb = playerStatsHelper.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.dreb
				}, 0)

				//console.log(playerStat/* .playerId */)
				let updatedPlayer = {}
				//If there is weird data in the summary where never heard of players are on top of for example
				//block of steals then rise the value below to filter them out
				if (playedGames > 7) {
					//const updatedPlayer = playerStat


					//updatedPlayer.playerId = playerStat.player.id
					updatedPlayer.name = playerStat.name
					updatedPlayer.playerId = playerStat.playerId
					updatedPlayer.postseason = postseason
					updatedPlayer.season = Number(season)

					updatedPlayer.pts_total = totalPts
					updatedPlayer.ast_total = totalAst
					updatedPlayer.reb_total = totalReb
					updatedPlayer.stl_total = totalStl
					updatedPlayer.blk_total = totalBlk
					updatedPlayer.turnover_total = totalTurnover
					updatedPlayer.pf_total = totalPf
					updatedPlayer.min_total = Math.floor(totalMin)

					updatedPlayer.fga_total = totalFga
					updatedPlayer.fgm_total = totalFgm
					updatedPlayer.fg3a_total = totalFg3a
					updatedPlayer.fg3m_total = totalFg3m
					updatedPlayer.fta_total = totalFta
					updatedPlayer.ftm_total = totalFtm

					updatedPlayer.oreb_total = totalOreb
					updatedPlayer.dreb_total = totalDreb

					if (totalFga > 0) {
						updatedPlayer.fg_pct = Math.floor(totalFgm / totalFga * 100 * 10) / 10
					} else {
						updatedPlayer.fg_pct = 0
					}
					if (totalFg3a > 0) {
						updatedPlayer.fg3_pct = Math.floor(totalFg3m / totalFg3a * 100 * 10) / 10
					} else {
						updatedPlayer.fg3_pct = 0
					}
					if (totalFta > 0) {
						updatedPlayer.ft_pct = Math.floor(totalFtm / totalFta * 100 * 10) / 10
					} else {
						updatedPlayer.ft_pct = 0
					}
					if (totalTurnover > 0) {
						updatedPlayer.ast_to_turnover = Math.floor(totalAst / totalTurnover * 10) / 10
					} else {
						updatedPlayer.ast_to_turnover = 0
					}

					updatedPlayer.pts_pergame = Math.round(totalPts / playedGames * 10) / 10
					updatedPlayer.ast_pergame = Math.round(totalAst / playedGames * 10) / 10
					updatedPlayer.reb_pergame = Math.round(totalReb / playedGames * 10) / 10
					updatedPlayer.stl_pergame = Math.round(totalStl / playedGames * 10) / 10
					updatedPlayer.blk_pergame = Math.round(totalBlk / playedGames * 10) / 10
					updatedPlayer.turnover_pergame = Math.round(totalTurnover / playedGames * 10) / 10
					updatedPlayer.pf_pergame = Math.round(totalPf / playedGames * 10) / 10
					updatedPlayer.min_pergame = Math.round(totalMin / playedGames * 10) / 10
					updatedPlayer.fga_pergame = Math.round(totalFga / playedGames * 10) / 10
					updatedPlayer.fgm_pergame = Math.round(totalFgm / playedGames * 10) / 10
					updatedPlayer.fg3a_pergame = Math.round(totalFg3a / playedGames * 10) / 10
					updatedPlayer.fg3m_pergame = Math.round(totalFg3m / playedGames * 10) / 10
					updatedPlayer.fta_pergame = Math.round(totalFta / playedGames * 10) / 10
					updatedPlayer.ftm_pergame = Math.round(totalFtm / playedGames * 10) / 10
					updatedPlayer.oreb_pergame = Math.round(totalOreb / playedGames * 10) / 10
					updatedPlayer.dreb_pergame = Math.round(totalDreb / playedGames * 10) / 10
					//Don't calculate per 36 min stats if minutes per game is too low
					if (updatedPlayer.min_pergame >= 10) {
						updatedPlayer.pts_per36 = Math.round(updatedPlayer.pts_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.ast_per36 = Math.round(updatedPlayer.ast_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.reb_per36 = Math.round(updatedPlayer.reb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.stl_per36 = Math.round(updatedPlayer.stl_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.blk_per36 = Math.round(updatedPlayer.blk_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.turnover_per36 = Math.round(updatedPlayer.turnover_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.pf_per36 = Math.round(updatedPlayer.pf_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.fga_per36 = Math.round(updatedPlayer.fga_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.fgm_per36 = Math.round(updatedPlayer.fgm_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.fg3a_per36 = Math.round(updatedPlayer.fg3a_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.fg3m_per36 = Math.round(updatedPlayer.fg3m_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.fta_per36 = Math.round(updatedPlayer.fta_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.ftm_per36 = Math.round(updatedPlayer.ftm_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.oreb_per36 = Math.round(updatedPlayer.oreb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
						updatedPlayer.dreb_per36 = Math.round(updatedPlayer.dreb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
					}
				} else {
					updatedPlayer.playerId = playerStat.playerId
				}
				updatedPlayer.played_games = playedGames
				playerStats = playerStats.map(s => s.name === playerStat.name ? updatedPlayer : s)
			})

			console.log('saving data to database...')
			console.log('season:', season)
			console.log('postseason:', postseason)
			let i = 1
			for (let playerStat of playerStats) {

				//Used for updating summary stats for the ongoing season
				if (playerStat.name !== undefined) {
					console.log(i, playerStat.name, playerStat.playerId)
					try {
						const filter = { playerId: playerStat.playerId, season: season, postseason: postseason }
						const options = { upsert: true }
						const updateDoc = { $set: playerStat }
						await Summary.updateOne(filter, updateDoc, options)
					} catch (err) {
						console.log('Error.', err)
						sendEmail('Error: Summary data update unsuccessfully', 'Error: Summary data update unsuccessfully')
					}
				}


				//Used for putting new data to database. Shouldn't be needed anymore.
				/*  try {
					 let summary = new Summary({ ...playerStat, '_id': uuidv4() })
					 await summary.save()
				 } catch (err) {
					 console.log('Error.', err)
				 } */
				i++
			}
		}

		return 'Summary data updated'
	}
	response.send("Summary update command received")
	try {
		await updateSummaryData()
		console.log("Summary data updated")
		sendEmail('Success: Summary data updated', 'Success: Summary data updated')
	} catch (err) {
		console.log('Error.', err)
		sendEmail('Error: Summary data update unsuccessfully', 'Error: Summary data update unsuccessfully')
	}

})

/////////////////////////////////////////////////////////////////////////////////////

statDBRouter.get('/summarystatsforaseasonfromdb/:season', async (request, response) => {

	const summaryStats = await Summary.find({
		'season': request.params.season
	})

	sendEmail(`Summary stats ${request.params.season} retrieved from database`)

	response.send(summaryStats)

	const timeOfRequest = new Date()
	const date = `${timeOfRequest.getDate()}.${timeOfRequest.getMonth()+1}.${timeOfRequest.getFullYear()}`
	const time = `${timeOfRequest.getHours()}:${timeOfRequest.getMinutes()}.${timeOfRequest.getSeconds()}`
	try {
		await Log.create({ type: "summary", year: request.params.season, timeOfRequest: time, dateOfRequest: date })
	} catch (err) { console.log(err) }
})

statDBRouter.get('/deletedata', async (_request, response) => {
	/* try{
		const response = await Stat.deleteMany({"game.date":"2021-10-04T00:00:00.000Z"})
		console.log("data deleted")
	}catch(e){
		console.log(e)
	} */
	/* try {
		const response = await Summary.deleteMany({ "season": "2021" })
		console.log("data deleted")
	} catch (e) {
		console.log(e)
	}
	response.send("data deleted") */
})
module.exports = statDBRouter