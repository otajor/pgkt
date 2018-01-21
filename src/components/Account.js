import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import AccountOverview from './AccountOverview';
import Transactions from './Transactions';
import IssueCoins from './IssueCoins';
import BurnCoins from './BurnCoins';
import RepayDebt from './RepayDebt';

// data is hard-coded for now
import transactions from '../data/transactions';

import io from 'socket.io-client';
import config from '../config.js';
const { serverUrl } = config;
const socket = io(serverUrl);

class Account extends Component {
  constructor() {
    super();
    this.state = {
      // TODO pick the first phone number from the accounts object
      accounts: [],
    };
  }

  componentDidMount() {
    axios.get(`${serverUrl}/get-all-account-data`)
      .then(({ data }) => {
        this.setAllAccounts(data.payload || [])
        this.setFirstAccount()
      })
      .catch((err) => {
        console.error(err);
      });

    socket.on('connect', () => {
      console.log('socket connected to', config.serverUrl);
    });
    socket.on('transactionMade', (telephone, description, amount, datetime) => {
      console.log(telephone, description, amount, datetime);
    })
  }

  setAllAccounts(accounts) {
    this.setState({ accounts });
  }

  setFirstAccount() {
    if (this.state.accounts.length) {
      const account = this.state.accounts.find(({ telephone }) => telephone);
      this.setState({
        account,
        phoneNumber: account.telephone,
      });
    }
  }

  setPhoneNumber(phoneNumber) {
    this.setState({ phoneNumber });
  }

  render() {
    const { accounts, phoneNumber } = this.state;
    const accountExists = phoneNumber && accounts.find(({ telephone }) => telephone === phoneNumber);
    const account = this.state.account;
    return (
      <div>
        <div style={styles.navbar}>
          <div style={styles.accountTitleContainer}>
            <span style={styles.accountTitle}>
              {accountExists && `Account +${phoneNumber}`}
            </span>
          </div>
          <div style={styles.searchBarContainer}>
            <SearchBar
              accounts={accounts}
              phoneNumber={phoneNumber}
              navbarHeight={NAVBAR_HEIGHT}
              onSubmit={(value) => this.setPhoneNumber(value)}
            />
          </div>
        </div>
        {accountExists
          ? (
            <div style={styles.panelsContainer}>
              <div style={{...styles.rowContainer, ...styles.topContainer}}>
                <AccountOverview
                  address={account.address}
                  balance={account.balance}
                  loanAmount={account.loanAmount}
                  idVerified={account.idVerified}
                />
                <div style={styles.topRightContainer}>
                  <IssueCoins />
                  <BurnCoins />
                  <RepayDebt />
                </div>
              </div>
              <div style={{ ...styles.rowContainer, ...styles.bottomContainer }}>
                <Transactions transactions={transactions} />
              </div>
            </div>
          )
          : phoneNumber
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
  panelsContainer: {
    marginTop: 20,
  },
  rowContainer: {
    width: '95%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topContainer: {
    height: '48vh',
  },
  topRightContainer: {
    width: '47.5%',
    display: 'inline-block',
    flexDirection: 'column',
  },
  bottomContainer: {}, // NOTE keep for flexibility
  helperText: {
    textAlign: 'center',
  }
};

export default Account;
