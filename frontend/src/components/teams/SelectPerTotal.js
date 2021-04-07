
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const SelectPerTotal = ({ setPerGameSelected, setTotalSelected }) => {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'per game', value: '1' },
    { name: 'total', value: '2' }
  ];

  const handlePerGameChange = (e) => {
    if (e.currentTarget.value === '1') {
      setPerGameSelected(true)
      setTotalSelected(false)
    }
    if (e.currentTarget.value === '2') {
      setPerGameSelected(false)
      setTotalSelected(true)
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

export default SelectPerTotal