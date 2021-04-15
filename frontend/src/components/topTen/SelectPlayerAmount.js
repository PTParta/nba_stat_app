
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const SelectPlayerAmount = ({ setPlayerAmount }) => {

  const [radioValue, setRadioValue] = useState('10');

  const radios = [
    { name: '10', value: '10' },
    { name: '25', value: '25' },
    { name: '50', value: '50' },
    { name: '100', value: '100' },
    { name: '250', value: '250' },
    { name: 'all', value: '1000' }
  ];

  const handlePerGameChange = (e) => {
    if (e.currentTarget.value === '10') {
      setPlayerAmount(Number(e.currentTarget.value))
    }
    if (e.currentTarget.value === '25') {
      setPlayerAmount(Number(e.currentTarget.value))
    }
    if (e.currentTarget.value === '50') {
      setPlayerAmount(Number(e.currentTarget.value))
    }
    if (e.currentTarget.value === '100') {
      setPlayerAmount(Number(e.currentTarget.value))
    }
    if (e.currentTarget.value === '250') {
      setPlayerAmount(Number(e.currentTarget.value))
    }
    if (e.currentTarget.value === '1000') {
      setPlayerAmount(Number(e.currentTarget.value))
    }
    setRadioValue(e.currentTarget.value)
  }

  return (
    <>
      <ButtonGroup toggle size="md">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="outline-secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => handlePerGameChange(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {/* test to check that states change correctly */}
      {/* <div style={{ color: 'white' }}>
        <p>reg: {regularSeasonSelected.toString()}</p>
        <p>post: {postSeasonSelected.toString()}</p>
      </div> */}
    </>
  )
}

export default SelectPlayerAmount