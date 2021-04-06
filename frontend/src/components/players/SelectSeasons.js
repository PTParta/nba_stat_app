import Select from 'react-select'
import { /* Container,  */Row, Col } from 'react-bootstrap'

const SelectSeasons = ({
  selectedFirstSeason,
  selectedLastSeason,
  setSelectedFirstSeason,
  setSelectedLastSeason
}) => {

  let seasonDescending = 2020
  const seasonSelectDescending = []
  while (seasonDescending >= 1979) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }

  let seasonAscending = 1979
  const seasonSelectAscending = []
  while (seasonAscending <= 2020) {
    seasonSelectAscending.push({ label: seasonAscending.toString(), value: seasonAscending.toString() })
    seasonAscending++
  }

  const handleSelectedFirstSeasonChange = (event) => {
    if (event.value > selectedLastSeason) {
      setSelectedFirstSeason(selectedLastSeason)
      setSelectedLastSeason(event.value)
    } else {
      setSelectedFirstSeason(event.value)
    }
  }

  const handleSelectedLastSeasonChange = (event) => {
    if (event.value < selectedFirstSeason) {
      setSelectedLastSeason(selectedFirstSeason)
      setSelectedFirstSeason(event.value)
    } else {
      setSelectedLastSeason(event.value)
    }
  }

  return (
    <>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Select
            options={seasonSelectAscending}
            /* onChange={(event) => setSelectedFirstSeason(event.value)} */
            onChange={(event) => handleSelectedFirstSeasonChange(event)}
            closeMenuOnSelect={true}
            placeholder={selectedFirstSeason.toString()}
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Select
            options={seasonSelectDescending}
            /* onChange={(event) => setSelectedLastSeason(event.value)} */
            onChange={(event) => handleSelectedLastSeasonChange(event)}
            closeMenuOnSelect={true}
            placeholder={selectedLastSeason}
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
    </>
  )
}

export default SelectSeasons