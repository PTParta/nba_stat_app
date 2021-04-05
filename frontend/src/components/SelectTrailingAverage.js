
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const SelectTrailingAverage = ({ setTrailingAverage }) => {

  const [radioValue, setRadioValue] = useState('25');

  const radios = [
    { name: '5', value: '5' },
    { name: '10', value: '10' },
    { name: '25', value: '25' },
    { name: '50', value: '50' },
    { name: '100', value: '100' },
  ];

  const handleRegularPostChange = (e) => {
    /* if (e.currentTarget.value === '1') {
      setRegularSeasonSelected(true)
      setPostSeasonSelected(false)
    }
    if (e.currentTarget.value === '2') {
      setRegularSeasonSelected(false)
      setPostSeasonSelected(true)
    } */
    setRadioValue(e.currentTarget.value)
    setTrailingAverage(Number(e.currentTarget.value))
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
            onChange={(e) => handleRegularPostChange(e)}
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

export default SelectTrailingAverage