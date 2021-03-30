
import { ButtonGroup, ToggleButton, Col } from 'react-bootstrap'
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
      <Col sm={4}>
        <ButtonGroup toggle size="md" /* styles={{ marginLeft: '10px' }} */ >
          {radios.map((radio, idx) => (
            <ToggleButton
              /* style={{ width: '95px', marginRight: '10px' }} */
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
      </Col>

    </>
  )
}

export default SelectRegularPost