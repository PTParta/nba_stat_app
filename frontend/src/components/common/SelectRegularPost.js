
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const SelectRegularPost = ({ setRegularSeasonSelected, setPostSeasonSelected }) => {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'regular', value: '1' },
    { name: 'post', value: '2' }
  ];

  const handleRegularPostChange = (e) => {
    if (e.currentTarget.value === '1') {
      setRegularSeasonSelected(true)
      setPostSeasonSelected(false)
    }
    if (e.currentTarget.value === '2') {
      setRegularSeasonSelected(false)
      setPostSeasonSelected(true)
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
            onChange={(e) => handleRegularPostChange(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}

export default SelectRegularPost