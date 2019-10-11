import React from 'react';
import Specifications from '../Specifications/Specifications';
import Total from '../Total'

console.log('here in the cart');
class Cart extends React.Component {
  render(){
    return(
      <section className="main__summary">
          <div className="cart-heading">
              <h2>Your cart</h2>
        </div>
        <div class="cart-parts">
          <Specifications selected={this.props.selected}/>
          <Total selected={this.props.selected}/>
        </div>
      
      </section>
    )
  }
}

export default Cart