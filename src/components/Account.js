import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AccountOverview from './AccountOverview';
import Transactions from './Transactions';
import IssueCoins from './IssueCoins';
import RepayDebt from './RepayDebt';

// data is hard-coded for now
import accounts from '../data/accounts';
import transactions from '../data/transactions';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      // pick the first phone number from the accounts object
      currentPhoneNumber: Object.keys(accounts)[0]
    };
  }
  render() {
    const { currentPhoneNumber } = this.state;

    return (
      <div>
        <div style={styles.navbar}>
          <div style={styles.accountTitleContainer}>
            <span style={styles.accountTitle}>
              Account #{currentPhoneNumber}
            </span>
          </div>
          <div style={styles.searchBarContainer}>
            <SearchBar height={NAVBAR_HEIGHT} />
          </div>
        </div>
        <div style={{...styles.rowContainer, ...styles.topContainer}}>
          <AccountOverview
            accounts={accounts}
            currentAccount={currentPhoneNumber}
          />
          <Transactions transactions={transactions[currentPhoneNumber]}/>
        </div>
        <div style={{...styles.rowContainer, ...styles.bottomContainer}}>
          <IssueCoins />
          <RepayDebt />
        </div>
      </div>
    );
  }
}

const NAVBAR_HEIGHT = 50;

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: NAVBAR_HEIGHT,
  },
  accountTitleContainer: {
    fontSize: 28,
    height: NAVBAR_HEIGHT,
    width: '60%',
    display: 'inline-block',
    textAlign: 'right',
  },
  searchBarContainer: {
    width: '40%',
    display: 'inline-block',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topContainer: {
    height: '50vh',
  },
  bottomContainer: {
    height: '30vh',
  },
};

export default Account;
