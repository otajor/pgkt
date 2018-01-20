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
      <div>
        {transaction.description}
      </div>
      <div>
        PGKT {transaction.amount} - {transaction.recipientPhoneNumber}
      </div>
    </div>
  </ListGroupItem>
);

const styles = {
  bottomContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
    // height: 20,
    fontSize: 16,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 20,
  },
  topLeft: {
    fontSize: 9,
  },
  topRight: {
    fontSize: 12,
    // border: '1px solid orange',
  },
};

export default TransactionRow;
