import React, { Component } from 'react';

console.log('here in the total');

    const{selected} = props;

    const total = Object.keys(selected).reduce(
        (acc, curr) => acc + selected[curr].cost,
        0
      );
    render() {
      return (
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {new Intl.NumberFormat('en-US', {style: 'currency',
            currency: 'USD'
            })}
        </div>
      </div>
      )
    }

  
  export default Total;