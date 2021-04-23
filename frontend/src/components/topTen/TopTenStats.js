import React from 'react'
import BarCharts from '../common/BarCharts'

const TopTenStats = (
  {
    topTenStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected,
    per36Selected,
    pctSelected,
    playerAmount
  }
) => {

  return (
    <div>
      <BarCharts
        stats={topTenStats}
        pctSelected={pctSelected}
        totalSelected={totalSelected}
        perGameSelected={perGameSelected}
        per36Selected={per36Selected}
        postSeasonSelected={postSeasonSelected}
        playerAmount={playerAmount}
        postSeasonFilteringDone={false}
      />
    </div >
  )
}

export default TopTenStats