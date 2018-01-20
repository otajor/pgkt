import React, { Component } from 'react';
import AccountOverview from './AccountOverview';
import Transactions from './Transactions';
import IssueCoins from './IssueCoins';
import RepayDebt from './RepayDebt';

class Account extends Component {
  render() {
    return (
      <div style={styles.accountContainer}>
        <div style={styles.topContainer}>
          <AccountOverview />
          <Transactions />
        </div>
        <div style={styles.bottomContainer}>
          <IssueCoins />
          <RepayDebt />
        </div>
      </div>
    );
  }
}

const styles = {
  accountContainer: {

  },
  topContainer: {

  },
  bottomContainer: {

  },
};

export default Account;
