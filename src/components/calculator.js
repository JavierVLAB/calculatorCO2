import React from 'react';
import QuestionLine from './questionLine';

const apiUrl = 'https://api.reforestum.com/v1/co2/steps';

//const apiUrlCalulate = 'https://api.reforestum.com/v1/co2/calculate';

// const data_type = {
//   'CO2_STEP_INPUT_TYPE_LIST': 0,
//   'CO2_STEP_INPUT_TYPE_TYPE_AHEAD': 1,
//   'CO2_STEP_INPUT_TYPE_INTEGER': 2,
//   'CO2_STEP_INPUT_TYPE_TEXT ': 3,
//   'CO2_STEP_INPUT_TYPE_ADDRESS': 4,
//   'CO2_STEP_INPUT_TYPE_2_ADDRESSES': 5,
// };

class Calculator extends React.Component {

  constructor(){
    super();
    this.state = {
      'dataArray': [],
      'arrayLength': 0,
      'bodyApi': {},
    }
    this.loadData(this.state.bodyApi);
  }
  
  loadData = async (body) => {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://app.reforestum.com',
      },
      method: 'post',
      body: JSON.stringify(body),
    });
    const data = await response.json();

    let newDataArray = [...this.state.dataArray,data];
    let newArrayLength = newDataArray.length;
    
    this.setState({
      'dataArray': newDataArray,
      'arrayLength': newArrayLength
    });
    console.log(newDataArray);
  };

  
  render(){
    return(
      
      <div className="calculator">

        {this.state.dataArray.map((data,id) => (
            <QuestionLine 
              key={id}
              data={data.data}
              arrayLength={this.state.arrayLength}
              onSetValue={this.loadData}
            />
          ))
        }
        
      </div>

    )
  }

};

export default Calculator;


// {
//   "status": 200,
//   "data": {
//       "id": 0,
//       "data_type": 1,
//       "pretext": "Calculate my",
//       "postext": "as a CO₂ source",
//       "typeahead_query_url": "https://api.reforestum.com/v1/co2/shortcuts",
//       "final": false,
//       "next_step_id": 2,
//       "children": [
//           {
//               "name": "flight",
//               "value": 58
//           },
//           {
//               "name": "car travel",
//               "value": 44
//           },
//           {
//               "name": "other travel",
//               "value": 14
//           },
//           {
//               "name": "food",
//               "value": 18
//           },
//           {
//               "name": "specific amount of carbon",
//               "value": 13
//           },
//           {
//               "name": "blockchain mining",
//               "value": 66
//           }
//       ]
//   }
// }