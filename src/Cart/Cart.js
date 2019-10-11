import React, {component} from 'react';
import Specifications from '../Specifications/Specifications';
import Total from './Total/Total'

class Cart extends component {
  render(){
  return(
    <section className="main__summary">
        <div className="cart-heading">
            <h2>Your cart</h2>
      </div>
      <div class="cart-parts">
        <Specifications
            itemsAdded={this.props.summary}/>

        <Total
            totalCost={this.USCurrencyFormat.format()}
        />
      </div>
    
    </section>
  )
  }
}

export default Cart