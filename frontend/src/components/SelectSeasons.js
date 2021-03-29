import Select from 'react-select'

const SelectSeasons = ({
  /* setSelectedSeasons, */
  setSelectedFirstSeason,
  setSelectedLastSeason,
  selectedFirstSeason,
  selectedLastSeason }) => {

  let seasonDescending = 2020
  const seasonSelectDescending = []
  while (seasonDescending >= 1980) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }

  let seasonAscending = 1980
  const seasonSelectAscending = []
  while (seasonAscending <= 2020) {
    seasonSelectAscending.push({ label: seasonAscending.toString(), value: seasonAscending.toString() })
    seasonAscending++
  }
  /*  const handleSelectedSeasonsChange = (selectedSeasons) => {
     setSelectedSeasons(selectedSeasons)
   } */

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

      {/* <p style={{ color: 'white' }}>from: </p> */}




      <table>
        <tbody>
          <tr>
            <td width={'150px'}><Select
              /* styles={customStyles} */
              /* isMulti */
              options={seasonSelectAscending}
              onChange={(event) => handleSelectedFromSeasonsChange(event)}
              closeMenuOnSelect={true}
              placeholder={selectedFirstSeason.toString()}
            /></td>
            <td width={'150px'}><Select
              /* styles={customStyles} */
              /* isMulti */
              options={seasonSelectDescending}
              /* onChange={(options) => handleSelectedSeasonsChange(options.map(option => option.value))} */
              closeMenuOnSelect={true}
              placeholder={selectedLastSeason}
            /></td>
          </tr>
        </tbody>
      </table>
    </div>





  )
}

export default SelectSeasons