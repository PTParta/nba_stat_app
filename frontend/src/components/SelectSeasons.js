import Select from 'react-select'

const SelectSeasons = ({
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

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td width={'100px'}><Select
              options={seasonSelectAscending}
              onChange={(event) => setSelectedFirstSeason(event.value)}
              closeMenuOnSelect={true}
              placeholder={selectedFirstSeason.toString()}
            /></td>
            <td width={'100px'}><Select
              options={seasonSelectDescending}
              onChange={(event) => setSelectedLastSeason(event.value)}
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