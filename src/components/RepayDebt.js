import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button, Col } from 'react-bootstrap';
import AccountPanel from './AccountPanel';

class RepayDebt extends Component {
  render() {
    return (
      <AccountPanel
        title='Repay Debt'
        style={this.props.containerStyle}
      >
        <div style={styles.div}>
          <Form>
            <Col md={6} md={6}>
              <FormGroup controlId="enterAmount" style={styles.enterAmount}>
                <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="number" placeholder="Enter Amount" />
              </FormGroup>{' '}
            </Col>
            <Col md={6} md={6}>
                <Button type="confirm">Confirm</Button>
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
  enterAmount: {
    display: 'flex',
    flex: 'row',
  },
};

export default RepayDebt;
