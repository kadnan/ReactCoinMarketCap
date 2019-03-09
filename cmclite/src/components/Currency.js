import React, { Component } from 'react';

class Currency extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.currency.name}</td>
        <td>{this.props.currency.quote.USD.market_cap.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
        <td>{this.props.currency.quote.USD.price.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
        <td>{this.props.currency.quote.USD.volume_24h}</td>
        <td>{this.props.currency.circulating_supply}</td>
        
      </tr>
    );
  }
}

export default Currency;
