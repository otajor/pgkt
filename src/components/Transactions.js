import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import AccountPanel from './AccountPanel';
import TransactionRow from './TransactionsRow';

class Transactions extends Component {

  render() {
    return (
      <AccountPanel
        title='Transactions'
        style={this.props.containerStyle}
      >
        <ListGroup>
          {this.props.transactions[this.props.currentAccount]
            .slice(0,5)
            .map(transaction => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
        </ListGroup>
      </AccountPanel>
    );
  }
}

const styles = {

};

export default Transactions;
