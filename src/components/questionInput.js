import React from 'react';

import { TextField, MenuItem } from '@material-ui/core';


const QuestionInput = ({ data , onSetValue }) => {
  
  if(data.data_type === 0){ //'CO2_STEP_INPUT_TYPE_LIST'
    const options = data.children;
    return (
      <>
        <TextField
          id="standard-select"
          select
          label="Select"
          value=""
           onChange={(e) => {onSetValue({
             "step_id": data.next_step_id,
             "value": e.target.value,
             })}}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </>
    );
  }
  
  else if(data.data_type === 1){ //'CO2_STEP_INPUT_TYPE_TYPE_AHEAD'
    const options = data.children;
    return (
      <>
        <TextField
          id="standard-select"
          select
          label="Select"
          value=""
           onChange={(e) => {onSetValue({
             "step_id": e.target.value,
             "value": e.target.value,
             })}}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </>
    );
  }

  else if(data.data_type === 2){ //'CO2_STEP_INPUT_TYPE_INTEGER'

    return (
      <>
        <TextField
          id="standard-number"
          label="Select Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </>
    );
  }
  

}

export default QuestionInput;

