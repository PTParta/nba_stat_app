
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const SelectRegularPost = ({ setRegularSeasonSelected, setPostSeasonSelected }) => {

  //const [checked, setChecked] = useState(false);
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
    <div>
      <ButtonGroup toggle size="sm">
        {radios.map((radio, idx) => (
          <ToggleButton
            style={{ width: '75px', marginRight: '10px' }}
            key={idx}
            type="radio"
            variant="outline-primary"
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
    </div>
  )
}

export default SelectRegularPost