import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import AccountPanel from './AccountPanel';

class IssueCoins extends Component {
  render() {
    return (
      <AccountPanel
        title='Issue Coins'
        style={this.props.containerStyle}
      >
        <div style={styles.div}>
        <Form>
          <Col xs={5} md={5}>
            <FormGroup controlId="enterAmount" style={styles.enterAmount}>
              <FormControl type="number" placeholder="Enter Amount" />
            </FormGroup>
          </Col>
          <Col xs={6} md={4}>
            <FormGroup controlId='issueType'>
              <FormControl componentClass="select" placeholder="Issue Type" required>
                <option value="">Select Issue Type</option>
                <option value="Loan">Loan</option>
                <option value="CashBuy">Cash Buy</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col xsHidden md={3}>
      		    <Button type="submit">Submit</Button>
          </Col>
      	</Form>
        </div>
      </AccountPanel>
    );
  }
}

const styles = {
  div: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  enterAmount: {
    display: 'flex',
    flex: 'row',
  },
};

export default IssueCoins;
