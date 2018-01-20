import React, { Component } from 'react';
import AccountPanel from './AccountPanel';

class AccountOverview extends Component {
  render() {
    return (
      <AccountPanel
        title='AccountOverview'
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

export default AccountOverview;
