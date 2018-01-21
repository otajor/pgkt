import React from 'react';
import moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';

const formatDate = (datetime) => moment(datetime).fromNow();

const TransactionRow = ({ transaction }) => (
  <ListGroupItem href="#" style={styles.transactionContainer}>
    <div style={styles.topContainer}>
      <span style={styles.topLeft}>
        {transaction.id}
      </span>
      <span style={styles.topRight}>
        {formatDate(transaction.datetime)}
      </span>
    </div>
    <div style={styles.bottomContainer}>
      <span style={{ ...styles.column, ...styles.firstColumn }}>
        <em>{transaction.description}</em>
      </span>
      <span style={{ ...styles.column, ...styles.secondColumn }}>
        {transaction.recipientPhoneNumber}
      </span>
      <span style={{ ...styles.column, ...styles.thirdColumn }}>
        <strong>{transaction.amount}</strong>
      </span>
    </div>
  </ListGroupItem>
);

const styles = {
  transactionContainer: {
    width: '80%',
    margin: 'auto',
  },
  bottomContainer: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 2.5,
  },
  column: {
    display: 'inline-block',
  },
  firstColumn: {
    width: '60%',
    textAlign: 'left',
  },
  secondColumn: {
    width: '25%',
    textAlign: 'center',
  },
  thirdColumn: {
    width: '15%',
    textAlign: 'right',
  },
  topContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeft: {
    fontSize: 11,
  },
  topRight: {
    fontSize: 13,
  },
};

export default TransactionRow;
