import React, { Component } from 'react';
import Currency from './Currency'

class CurrencyList extends Component {
  render() {
    return (
        <table className="table margin-top">
            <thead>
            <tr>
              <th>Name</th>
              <th>MarketCap</th>
              <th>Price</th>
              <th>Volume(24h)</th>
              <th>Circulating Supply(24h)</th>
            </tr>
            </thead>
            <tbody>
            {
                this.props.currencies.map(( currency ) => {
                return (
                  <Currency key={currency.id} currency={currency} />
                );
              })
            }
             
            </tbody>
        </table>
    );
  }
}

export default CurrencyList;
