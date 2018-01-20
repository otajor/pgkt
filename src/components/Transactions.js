import React, { Component } from 'react';
import AccountPanel from './AccountPanel';

class Transactions extends Component {
  render() {
    return (
      <AccountPanel
        title='Transactions'
        style={this.props.containerStyle}
      >
        <div>
          <p>Children go here</p>
          <p>Children go here</p>
          <p>Children go here</p>
          <p>Children go here</p>
        </div>
      </AccountPanel>
    );
  }
}

const styles = {

};

export default Transactions;
