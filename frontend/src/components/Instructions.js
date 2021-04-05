const Instructions = () => {

  return (
    <div style={{ color: 'white' }}>
      <div><strong>Instructions</strong></div>
      <br></br>
      <table striped>
        <tbody>
          <tr>
            <td>- Select player, data starts loading</td>
          </tr>
          <br></br>
          <tr>
            <td>- Select seasons. Default is 1979-2020</td>
          </tr>
          <br></br>
          <tr>
            <td>- Select stats</td>
          </tr>
          <br></br>
          <tr>
            <td>- Select the amount of games to be
              counted into the trailing average</td>
          </tr>
          <br></br>
          <tr>
            <td>- Select regular or post season</td>
          </tr>
          <br></br>
          <br></br>
          <br></br>
        </tbody>
      </table>
    </div>
  )
}

export default Instructions