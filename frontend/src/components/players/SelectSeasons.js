import Select from 'react-select'
import { smSide, smCenter } from '../../styling/columnWidths'
import { Row, Col } from 'react-bootstrap'

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
    console.log('event.value:', event.value)
    console.log('Number(event.value):', Number(event.value))
    console.log('selectedLastSeason:', selectedLastSeason)
    if (Number(event.value) > selectedLastSeason) {
      setSelectedFirstSeason(selectedLastSeason)
      setSelectedLastSeason(Number(event.value))
    } else {
      setSelectedFirstSeason(Number(event.value))
    }
  }

  const handleSelectedLastSeasonChange = (event) => {
    if (Number(event.value) < selectedFirstSeason) {
      setSelectedLastSeason(selectedFirstSeason)
      setSelectedFirstSeason(Number(event.value))
    } else {
      setSelectedLastSeason(Number(event.value))
    }
  }

  return (
    <>
      <Row>
        <Col sm={smSide}></Col>
        <Col sm={smCenter}>
          <Select
            options={seasonSelectAscending}
            onChange={(event) => handleSelectedFirstSeasonChange(event)}
            closeMenuOnSelect={true}
            placeholder={selectedFirstSeason.toString()}
          />
        </Col>
        <Col sm={smSide}></Col>
      </Row>
      <Row>
        <Col sm={smSide}></Col>
        <Col sm={smCenter}>
          <Select
            options={seasonSelectDescending}
            onChange={(event) => handleSelectedLastSeasonChange(event)}
            closeMenuOnSelect={true}
            placeholder={selectedLastSeason}
          />
        </Col>
        <Col sm={smSide}></Col>
      </Row>
    </>
  )
}

export default SelectSeasons