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
      >
        <ListGroup>
          {this.props.transactions
            // TODO paginate this list?
            .slice(0,5) // get only the first 5
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

export default Transactions;
