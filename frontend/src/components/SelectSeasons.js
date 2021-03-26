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

  const handleSelectedFromSeasonsChange = (event) => {
    console.log(event.value)
  }

  const customStyles = {
    /* control: styles => ({
      ...styles,

    }),
    option: styles => ({
      ...styles,

    }), */
    menu: styles => ({
      ...styles,
      width: '10'
    })

  }
  return (
    <div>
      {/* <Select
        isMulti
        options={seasonSelect}
        onChange={(options) => handleSelectedSeasonsChange(options.map(option => option.value))}
        closeMenuOnSelect={false}
        placeholder='Select season(s)'
      /> */}

      <p style={{ color: 'white' }}>from: </p>
      <Select
        /* styles={customStyles} */
        /* isMulti */
        options={seasonSelect}
        onChange={(event) => handleSelectedFromSeasonsChange(event)}
        closeMenuOnSelect={true}
        placeholder='Select season'
      />
      <br></br>
      <p style={{ color: 'white' }}>to: </p>
      <Select
        /* styles={customStyles} */
        /* isMulti */
        options={seasonSelect}
        /* onChange={(options) => handleSelectedSeasonsChange(options.map(option => option.value))} */
        closeMenuOnSelect={true}
        placeholder='Select season'
      />
    </div>





  )
}

export default SelectSeasons