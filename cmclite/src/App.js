import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import CurrencyList from './components/CurrencyList'
import About from './pages/About'

class CMCLiteApp extends Component {  
  
  state = {
    currencies: [        
    ]
  }

  componentDidMount() {    
    axios.get('http://localhost:8080/fetch.php')
    .then(res=> this.setState({ currencies:res.data.data }))
    //.then(res=> console.log( res.data.data))
    
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-md-12"></div>
          <h2>&copy; CoinMarketCap Lite</h2>
        </div>
        <div className="row margin-top">
            <CurrencyList currencies={this.state.currencies}  />
        </div>
      </div>
    );
  }
}

export default CMCLiteApp;
