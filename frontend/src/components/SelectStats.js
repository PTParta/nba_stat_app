import { Form } from 'react-bootstrap'
import React from 'react'
//import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes'

const SelectStats = (
  {
    ptsSelected,
    setPtsSelected,
    astSelected,
    setAstSelected,
    rebSelected,
    setRebSelected,
    drebSelected,
    setDrebSelected,
    orebSelected,
    setOrebSelected,
    blkSelected,
    setBlkSelected,
    stlSelected,
    setStlSelected,
    turnoverSelected,
    setTurnoverSelected,
    fgaSelected,
    setFgaSelected,
    fgmSelected,
    setFgmSelected,
    fg_pctSelected,
    setFg_pctSelected,
    fg3aSelected,
    setFg3aSelected,
    fg3mSelected,
    setFg3mSelected,
    fg3_pctSelected,
    setFg3_pctSelected,
    ftaSelected,
    setFtaSelected,
    ftmSelected,
    setFtmSelected,
    ft_pctSelected,
    setFt_pctSelected,
    pfSelected,
    minSelected,
    setMinSelected,
    setPfSelected
  }
) => {

  return (
    <div style={{ color: 'white' }}>
      <Form>
        <Form.Check
          inline={true}
          onChange={() => setPtsSelected(!ptsSelected)}
          type="checkbox"
          label="pts" />
        <Form.Check
          inline={true}
          onChange={() => setAstSelected(!astSelected)}
          type="checkbox"
          label="ast" />
        <Form.Check
          inline={true}
          onChange={() => setRebSelected(!rebSelected)}
          type="checkbox"
          label="reb" />
        <Form.Check
          inline={true}
          onChange={() => setBlkSelected(!blkSelected)}
          type="checkbox"
          label="blk" />
        <Form.Check
          inline={true}
          onChange={() => setStlSelected(!stlSelected)}
          type="checkbox"
          label="stl" />
        <Form.Check
          inline={true}
          onChange={() => setTurnoverSelected(!turnoverSelected)}
          type="checkbox"
          label="turnover" />
        <Form.Check
          inline={true}
          onChange={() => setPfSelected(!pfSelected)}
          type="checkbox"
          label="pf" />
        <Form.Check
          inline={true}
          onChange={() => setMinSelected(!minSelected)}
          type="checkbox"
          label="min" />
      </Form>
      <br></br>
      <Form>
        <Form.Check
          inline={true}
          onChange={() => setDrebSelected(!drebSelected)}
          type="checkbox"
          label="dreb" />
        <Form.Check
          inline={true}
          onChange={() => setOrebSelected(!orebSelected)}
          type="checkbox"
          label="oreb" />
      </Form>
      <br></br>
      <Form>
        <Form.Check
          inline={true}
          onChange={() => setFg_pctSelected(!fg_pctSelected)}
          type="checkbox"
          label="fg_pct" />
        <Form.Check
          inline={true}
          onChange={() => setFg3_pctSelected(!fg3_pctSelected)}
          type="checkbox"
          label="fg3_pct" />
        <Form.Check
          inline={true}
          onChange={() => setFt_pctSelected(!ft_pctSelected)}
          type="checkbox"
          label="ft_pct" />
      </Form>
      <br></br>
      <Form>
        <Form.Check
          inline={true}
          onChange={() => setFgaSelected(!fgaSelected)}
          type="checkbox"
          label="fga" />
        <Form.Check
          inline={true}
          onChange={() => setFgmSelected(!fgmSelected)}
          type="checkbox"
          label="fgm" />
        <Form.Check
          inline={true}
          onChange={() => setFg3aSelected(!fg3aSelected)}
          type="checkbox"
          label="fg3a" />
        <Form.Check
          inline={true}
          onChange={() => setFg3mSelected(!fg3mSelected)}
          type="checkbox"
          label="fg3m" />
        <Form.Check
          inline={true}
          onChange={() => setFtaSelected(!ftaSelected)}
          type="checkbox"
          label="fta" />
        <Form.Check
          inline={true}
          onChange={() => setFtmSelected(!ftmSelected)}
          type="checkbox"
          label="ftm" />
      </Form>
      <br></br>
      {/* test to check that the states change correctly */}
      {/* <p>pts: {ptsSelected.toString()}</p>
      <p>ast:{astSelected.toString()}</p>
      <p>reb:{rebSelected.toString()}</p>
      <p>blk:{blkSelected.toString()}</p>
      <p>stl:{stlSelected.toString()}</p>
      <p>turnover:{turnoverSelected.toString()}</p>
      <p>min:{minSelected.toString()}</p>
      <p>pf:{pfSelected.toString()}</p>
      <br></br>
      <p>dreb:{drebSelected.toString()}</p>
      <p>oreb:{orebSelected.toString()}</p>
      <br></br>
      <p>fg_pct:{fg_pctSelected.toString()}</p>
      <p>fg3_pct:{fg3_pctSelected.toString()}</p>
      <p>ft_pct:{ft_pctSelected.toString()}</p>
      <br></br>
      <p>fga:{fgaSelected.toString()}</p>
      <p>fgm:{fgmSelected.toString()}</p>
      <p>fg3a:{fg3aSelected.toString()}</p>
      <p>fg3m:{fg3mSelected.toString()}</p>
      <p>fta:{ftaSelected.toString()}</p>
      <p>ftm:{ftmSelected.toString()}</p> */}
    </div>
  )
}

export default SelectStats