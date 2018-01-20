import React, { Component } from 'react';
import AccountOverview from './AccountOverview';
import Transactions from './Transactions';
import IssueCoins from './IssueCoins';
import RepayDebt from './RepayDebt';

class Account extends Component {
  render() {
    return (
      <div style={styles.accountContainer}>
        <div style={styles.phoneNumberContainer}>
          <h1>Phone Number</h1>
        </div>
        <div style={[styles.row, styles.topContainer]}>
          <AccountOverview />
          <Transactions />
        </div>
        <div style={[styles.row, styles.bottomContainer]}>
          <IssueCoins />
          <RepayDebt />
        </div>
      </div>
    );
  }
}

const styles = {
  rowContainer: {
    margin: 'auto',
  },
  phoneNumberContainer: {
    textAlign: 'center',
  },
  accountContainer: {

  },
  topContainer: {
  },
  bottomContainer: {

  },
};

export default Account;
