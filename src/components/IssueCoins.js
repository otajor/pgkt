import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button, Col } from 'react-bootstrap';
import AccountPanel from './AccountPanel';

class IssueCoins extends Component {
  render() {
    return (
      <AccountPanel
        title='Issue Coins'
        style={this.props.containerStyle}
      >
        <div style={styles.div}>
        <Form style={styles.form}>
          <Col xs={6} md={4}>
        		<FormGroup controlId="enterAmount" style={styles.enterAmount}>
        			<InputGroup.Addon>$</InputGroup.Addon>
        			<FormControl type="text" placeholder="Enter Amount" />
        		</FormGroup>{' '}
          </Col>
          <Col xs={6} md={4}>
            <FormGroup controlId='issueType' style={styles.issueType}>
              <FormControl componentClass="select" placeholder="Issue Type">
                <option value="Loan" selected>Loan</option>
                <option value="CashBuy">Cash Buy</option>
              </FormControl>
            </FormGroup>{' '}
          </Col>
          <Col xsHidden md={4}>
      		    <Button style={styles.submitButton} type="submit">Submit</Button>
          </Col>
      	</Form>
        </div>
      </AccountPanel>
    );
  }
}

const styles = {
  div: {
    padding: '20px',
  },
  form: {
    // display: 'flex',
    // flexDirection: 'row',
  },
  enterAmount: {
    display: 'flex',
    flex: 'row',
  },
  issueType: {
    // display: 'flex',
    // flex: 'inline-block',
  },
  submitButton: {
    // display: 'flex',
    // flex: 'inline-block',
  }
};

export default IssueCoins;
