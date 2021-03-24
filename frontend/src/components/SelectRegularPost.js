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
        inline={true}
        onChange={() => handleRegularSeasonSelectedChange()}
        style={{ color: 'white' }}
        type="checkbox"
        label="regular season" />
      <Form.Check
        inline={true}
        onChange={() => handlePostSeasonSelectedChange()}
        style={{ color: 'white' }}
        type="checkbox"
        label="post season" />
    </div>

  )
}

export default SelectRegularPost