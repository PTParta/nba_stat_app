import Select from 'react-select'

const SelectSeasons = ({ setSelectedSeasons }) => {

  let season = 2020
  const seasonSelect = []
  while (season >= 1980) {
    seasonSelect.push({ label: season.toString(), value: season.toString() })
    season--
  }
  const handleSelectedSeasonsChange = (selectedSeasons) => {
    setSelectedSeasons(selectedSeasons)
  }
  return (
    <Select
      isMulti
      options={seasonSelect}
      onChange={(options) => handleSelectedSeasonsChange(options.map(option => option.value))}
      closeMenuOnSelect={false}
      placeholder='Select season(s)'
    />
  )
}

export default SelectSeasons