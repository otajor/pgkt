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
      // TODO pick the first phone number from the accounts object
    };
  }

  setCurrentAccount(phoneNumber) {
    this.setState({ currentAccount: phoneNumber });
  }

  render() {
    const { currentAccount } = this.state;
    const accountExists = currentAccount && accounts[currentAccount];
    return (
      <div>
        <div style={styles.navbar}>
          <div style={styles.accountTitleContainer}>
            <span style={styles.accountTitle}>
              {accountExists && `Account # ${currentAccount}`}
            </span>
          </div>
          <div style={styles.searchBarContainer}>
            <SearchBar
              accounts={accounts}
              currentAccount={currentAccount}
              navbarHeight={NAVBAR_HEIGHT}
              onSubmit={(value) => this.setCurrentAccount(value)}
            />
          </div>
        </div>
        {accountExists
          ? (
            <div>
              <div style={{...styles.rowContainer, ...styles.topContainer}}>
                <AccountOverview account={accounts[currentAccount]} />
                <Transactions transactions={transactions[currentAccount]} />
              </div>
              <div style={{ ...styles.rowContainer, ...styles.bottomContainer }}>
                <IssueCoins />
                <RepayDebt />
              </div>
            </div>
          )
          : currentAccount
            ? (
              <div>
                <h2 style={styles.helperText}>The selected account does not exist</h2>
              </div>
            )
            : (
              <div>
                <h2 style={styles.helperText}>Enter an account number to proceed</h2>
              </div>
            )
        }
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
    width: '95%',
    margin: 'auto',
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
  helperText: {
    textAlign: 'center',
  }
};

export default Account;
