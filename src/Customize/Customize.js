import React, {component} from 'react';
import Features from './Features/Features'

class Customize extends component { 
  render(){
    return (
    <form className="main__form">
      <div className="main-form-heading">
        <h2>Customize your laptop</h2>
      </div>
      <div>
        <Features
          features={this.props.features}/>
      </div> 
    </form>

  )
  }
}

export default Customize 
