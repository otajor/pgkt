import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import AccountPanel from './AccountPanel';
import TransactionRow from './TransactionsRow';

class Transactions extends Component {

  render() {
    return (
      <AccountPanel
        formatAsBody
        title='Transactions'
        style={this.props.containerStyle}
        containerStyle={styles.panelContainer}
      >
        {this.props.transactions.length
          ? (
            <ListGroup>
              {this.props.transactions
                .map(transaction => (
                  <TransactionRow
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
            </ListGroup>
          )
          : (
            <div>
              No transactions have been made
            </div>
          )
        }
      </AccountPanel>
    );
  }
}

Transactions.defaultProps = {
  transactions: [],
};

const styles = {
  panelContainer: {
    width: '100%',
  },
};

export default Transactions;
