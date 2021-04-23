import React from 'react'
import BarCharts from '../common/BarCharts'

const PlayerComparisonStats = (
  {
    filteredSummaryStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected,
    per36Selected,
    pctSelected,
  }
) => {

  return (
    <div>
      <BarCharts
        stats={filteredSummaryStats}
        pctSelected={pctSelected}
        totalSelected={totalSelected}
        perGameSelected={perGameSelected}
        per36Selected={per36Selected}
        postSeasonSelected={postSeasonSelected}
        playerAmount={1000}
        postSeasonFilteringDone={false}
      />
    </div >
  )
}

export default PlayerComparisonStats