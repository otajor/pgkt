import React, { Component } from 'react';
import AccountPanel from './AccountPanel';
import { Col } from 'react-bootstrap';

class AccountOverview extends Component {
  render() {
    return (
      <AccountPanel
        title='AccountOverview'
        style={this.props.containerStyle}
      >
        <div>
          <Col xs={6} md={6}>
            <p><span style={styles.textTitle}>Public Key:</span></p>
          </Col>
          <Col xs={6} md={6}>
            <p>{this.props.accounts[this.props.currentAccount].publicKey}</p>
          </Col>
          <Col xs={6} md={6}>
            <p><span style={styles.textTitle}>Balance:</span></p>
          </Col>
          <Col xs={6} md={6}>
            <p>{this.props.accounts[this.props.currentAccount].balance}</p>
          </Col>
        </div>
      </AccountPanel>
    );
  }
}

const styles = {
  textTitle: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  }
};

export default AccountOverview;
