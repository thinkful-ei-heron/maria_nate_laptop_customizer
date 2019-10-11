import React from 'react';
import FeaturesList from '../FeaturesList/FeaturesList'

class Customize extends React.Component { 
  render(){
    return (
    <form className="main__form">
      <div className="main-form-heading">
        <h2>Customize your laptop</h2>
      </div>
      <div>
        <FeaturesList
          features={this.props.features}/>
      </div> 
    </form>

  )
  }
 
}

export default Customize;
