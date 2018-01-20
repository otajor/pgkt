import React from 'react';
import AccountPanel from './AccountPanel';
import { Col, Row } from 'react-bootstrap';

const AccountOverview = (props) => (
  <AccountPanel
    formatAsBody
    title='AccountOverview'
    style={props.containerStyle}
  >
    <div style={styles.overviewContainer}>
      <Row style={styles.row}>
        <Col style={styles.halfColumn}>
          <span style={styles.textTitle}>Public Key</span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.alignRight }}>
          <p>{props.account.publicKey}</p>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.halfColumn}>
          <span style={styles.textTitle}>
            Balance
          </span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.alignRight }}>
          <p>
            <em>{props.account.balance}</em> PGKT
          </p>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.halfColumn}>
          <span style={styles.textTitle}>
            Loan due
          </span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.alignRight }}>
          <p>
            <em>{props.account.loanAmount}</em> PGKT
          </p>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.halfColumn}>
          <span style={styles.textTitle}>Verified</span>
        </Col>
        <Col style={{ ...styles.halfColumn, ...styles.alignRight }}>
          <p>{props.account.verified ? 'yes' : 'no' }</p>
        </Col>
      </Row>
    </div>
  </AccountPanel>
);

const styles = {
  overviewContainer: {
    marginTop: 20,
    fontSize: 18,
  },
  row: {
    width: '70%',
    margin: 'auto',
  },
  halfColumn: {
    display: 'inline-block',
    textAlign: 'left',
    width: '50%',
  },
  alignRight: {
    textAlign: 'right',
  },
  textTitle: {
    fontWeight: 'bold',
  }
};

export default AccountOverview;
