import React, { useState, useEffect } from 'react'
import SelectSeason from './SelectSeason'
import SelectPlayer from './SelectPlayer'
import PlayerComparisonStats from './PlayerComparisonStats'

const PlayerComparison = ({ players, fetchingData, setFetchingData }) => {
  const [selectedSeason, setSelectedSeason] = useState(2020)
  const [playersForSelectedSeason, setPlayersForSelectedSeason] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [statsForSelectedPlayers, setStatsForSelectedPlayers] = useState([])
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(true)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)
  const [perGameSelected, setPerGameSelected] = useState(true)
  const [totalSelected, setTotalSelected] = useState(false)
  const [per36Selected, setPer36Selected] = useState(false)

  return (
    <div>
      <SelectSeason
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        /* selectedTeam={selectedTeam}
        setTeamStats={setTeamStats}
        teams={teams} */
        setFetchingData={setFetchingData}
        setPlayersForSelectedSeason={setPlayersForSelectedSeason}
        players={players}
      />
      {playersForSelectedSeason.length > 0
        ? <SelectPlayer
          players={playersForSelectedSeason}
          setSelectedPlayer={setSelectedPlayer}
          /* setPlayerStats={setPlayerStats} */
          fetchingData={fetchingData}
          setFetchingData={setFetchingData}
          playersForSelectedSeason={playersForSelectedSeason}
          selectedSeason={selectedSeason}
          setStatsForSelectedPlayers={setStatsForSelectedPlayers}
          statsForSelectedPlayers={statsForSelectedPlayers}
        />
        : <></>}

      <PlayerComparisonStats
        regularSeasonSelected={regularSeasonSelected}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
        per36Selected={per36Selected}
        statsForSelectedPlayers={statsForSelectedPlayers}
      />
    </div>
  )
}

export default PlayerComparison
