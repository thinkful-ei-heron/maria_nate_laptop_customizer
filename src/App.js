import React from 'react';
import './App.css';
import Customize from './Customize/Customize';
import Cart from './Cart/Cart'
import FeaturesList from './FeaturesList/FeaturesList';
    console.log('here in the app');


  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
  };
  
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Customize
            features={this.props.features}
            currency={USCurrencyFormat}/>  
          <Cart
            specifications={this.state.specifications}
            total={this.state.total}
          />
          <FeaturesList currency={USCurrencyFormat} 
          features = {this.props.features} 
          state = {this.state} 
          updateFeature = {this.updateFeature} />
        </main>

      </div>
    )
  }
}


// components of App Parent
export default App;



