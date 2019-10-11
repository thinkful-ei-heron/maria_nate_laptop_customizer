import React, { Component } from 'react';

console.log('here in the total');
class Total extends Component {
    render() {
      return (
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {/* value={USCurrencyFormat.format(total)} */}
        </div>
      </div>
      )


    
    }
  }
  
  export default Total;