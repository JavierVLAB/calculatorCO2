import React from 'react';
import QuestionInput from './questionInput';

import { TextField, Typography, MenuItem } from '@material-ui/core';


class QuestionLine extends React.Component{


  render(){

    const options = this.props.data.children;
    //console.log(options);

    return (
      <div className="calculator-input">
        <form className="hh" noValidate autoComplete="off">
          
            {this.props.data.pretext}
          
          <QuestionInput 
            data={this.props.data}
            onSetValue={this.props.onSetValue}
          />
          
            {this.props.data.postext}
          
        </form>
      </div>
    )
  }
};

export default QuestionLine;