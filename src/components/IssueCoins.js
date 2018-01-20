import React, { Component } from 'react';
import AccountPanel from './AccountPanel';

class IssueCoins extends Component {
  render() {
    return (
      <AccountPanel
        title='Issue Coins'
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

export default IssueCoins;
