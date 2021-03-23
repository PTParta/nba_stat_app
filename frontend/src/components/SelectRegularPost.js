import { Form } from 'react-bootstrap'


const SelectRegularPost = ({ regularSeasonSelected, postSeasonSelected, setRegularSeasonSelected, setPostSeasonSelected }) => {

  const handleRegularSeasonSelectedChange = (event) => {
    setRegularSeasonSelected(!regularSeasonSelected)
  }

  const handlePostSeasonSelectedChange = (event) => {
    setPostSeasonSelected(!postSeasonSelected)
  }

  return (
    <div>
      <Form.Check
        onChange={() => handleRegularSeasonSelectedChange()}
        style={{ color: 'white' }}
        type="checkbox"
        label="Regular season" />
      <Form.Check
        onChange={() => handlePostSeasonSelectedChange()}
        style={{ color: 'white' }}
        type="checkbox"
        label="Post season" />
    </div>

  )
}

export default SelectRegularPost