import Select from 'react-select'
import { /* Container,  */Row, Col } from 'react-bootstrap'

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
    <>
      <Row>
        <Col sm={2}></Col>
        <Col sm={4}>
          <Select
            options={seasonSelectAscending}
            onChange={(event) => setSelectedFirstSeason(event.value)}
            closeMenuOnSelect={true}
            placeholder={selectedFirstSeason.toString()}
          />
        </Col>
        <Col sm={2}></Col>
      </Row>
      <Row>
        <Col sm={2}></Col>
        <Col sm={4}>
          <Select
            options={seasonSelectDescending}
            onChange={(event) => setSelectedLastSeason(event.value)}
            closeMenuOnSelect={true}
            placeholder={selectedLastSeason}
          />
        </Col>
        <Col sm={2}></Col>
      </Row>
    </>
  )
}

export default SelectSeasons