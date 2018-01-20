import React, { Component } from 'react';
import AccountPanel from './AccountPanel';
import { Col } from 'react-bootstrap';

const AccountOverview = (props) => (
  <AccountPanel
    formatAsBody
    title='AccountOverview'
    style={props.containerStyle}
  >
    <div>
      <Col xs={6} md={6}>
        <span style={styles.textTitle}>Public Key:</span>
      </Col>
      <Col xs={6} md={6}>
        <p>{props.account.publicKey}</p>
      </Col>
      <Col xs={6} md={6}>
        <span style={styles.textTitle}>Balance:</span>
      </Col>
      <Col xs={6} md={6}>
        <p>{props.account.balance}</p>
      </Col>
      <Col xs={6} md={6}>
        <span style={styles.textTitle}>Loan due:</span>
      </Col>
      <Col xs={6} md={6}>
        <p>{props.account.loanAmount}</p>
      </Col>
      <Col xs={6} md={6}>
        <span style={styles.textTitle}>Verified:</span>
      </Col>
      <Col xs={6} md={6}>
        <p>{props.account.verified ? 'yes' : 'no' }</p>
      </Col>
    </div>
  </AccountPanel>
);

const styles = {
  textTitle: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  }
};

export default AccountOverview;
