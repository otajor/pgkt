import React from 'react';
import moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';

const formatDate = (datetime) => moment(datetime).fromNow();

const TransactionRow = ({ transaction }) => (
  <ListGroupItem href="#">
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
  bottomContainer: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  topLeft: {
    fontSize: 9,
  },
  topRight: {
    fontSize: 12,
  },
};

export default TransactionRow;
