import React, { Component } from 'react';
import AccountOverview from './AccountOverview';
import Transactions from './Transactions';
import IssueCoins from './IssueCoins';
import RepayDebt from './RepayDebt';

import accounts from '../data/accounts';
import transactions from '../data/transactions';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      currentPhoneNumber: Object.keys(accounts)[0]
    };
  }
  render() {
    return (
      <div style={styles.accountContainer}>
        <div style={styles.phoneNumberContainer}>
          <h1>Account #{this.state.currentPhoneNumber}</h1>
        </div>
        <div style={[styles.row, styles.topContainer]}>
          <AccountOverview
            accounts={accounts}
            currentAccount={this.state.currentPhoneNumber}
          />
          <Transactions
            currentAccount={this.state.currentPhoneNumber}
            transactions={transactions}
          />
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
