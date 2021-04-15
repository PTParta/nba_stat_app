
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const SelectPerTotal = ({ setPerGameSelected, setTotalSelected, setPer36Selected, setPctSelected }) => {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'per game', value: '1' },
    { name: 'total', value: '2' },
    { name: 'per 36 min', value: '3' },
    { name: '%', value: '4' }

  ];

  const handlePerGameChange = (e) => {
    if (e.currentTarget.value === '1') {
      setPerGameSelected(true)
      setTotalSelected(false)
      setPer36Selected(false)
      setPctSelected(false)
    }
    if (e.currentTarget.value === '2') {
      setPerGameSelected(false)
      setTotalSelected(true)
      setPer36Selected(false)
      setPctSelected(false)
    }
    if (e.currentTarget.value === '3') {
      setPerGameSelected(false)
      setTotalSelected(false)
      setPer36Selected(true)
      setPctSelected(false)
    }
    if (e.currentTarget.value === '4') {
      setPerGameSelected(false)
      setTotalSelected(false)
      setPer36Selected(false)
      setPctSelected(true)
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