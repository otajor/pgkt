import React from 'react';
import AccountPanel from './AccountPanel';
import { Col, Row } from 'react-bootstrap';

const AccountOverview = (props) => (
  <AccountPanel
    formatAsBody
    title='Account Overview'
    style={props.containerStyle}
  >
    <div style={styles.overviewContainer}>
      <Row style={styles.row}>
        <Col style={{ ...styles.halfColumn, ...styles.leftColumn }}>
          <span style={styles.textTitle}>Address</span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.rightColumn, ...styles.address }}>
          <p>{props.address}</p>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={{ ...styles.halfColumn, ...styles.leftColumn }}>
          <span style={styles.textTitle}>
            Balance
          </span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.rightColumn, ...styles.alignRight }}>
          <p>
            <em>{props.balance}</em> PGKT
          </p>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={{ ...styles.halfColumn, ...styles.leftColumn }}>
          <span style={styles.textTitle}>
            Loan due
          </span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.rightColumn, ...styles.alignRight }}>
          <p>
            <em>{props.loanAmount}</em> PGKT
          </p>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={{ ...styles.halfColumn, ...styles.leftColumn }}>
          <span style={styles.textTitle}>ID Verified</span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.rightColumn }}>
          <p>{props.verified ? 'yes' : 'no' }</p>
        </Col>
      </Row>
    </div>
  </AccountPanel>
);

AccountOverview.defaultProps = {
  balance: 0,
  loanAmount: 0,
}

const styles = {
  overviewContainer: {
    marginTop: 20,
    fontSize: 18,
  },
  row: {
    width: '80%',
    margin: 'auto',
  },
  halfColumn: {
    display: 'inline-block',
    textAlign: 'left',
  },
  leftColumn: {
    width: '25%',
  },
  rightColumn: {
    width: '75%',
    textAlign: 'right',
  },
  address: {
    fontSize: 14,
  },
  textTitle: {
    fontWeight: 'bold',
  }
};

export default AccountOverview;
