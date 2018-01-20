import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';
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
            <Col xs={6} md={6}>
              <FormGroup controlId="enterAmount" style={styles.enterAmount}>
                <FormControl type="number" placeholder="Enter Amount" />
              </FormGroup>
            </Col>
            <Col xs={3} md={3}>
                <Button type="submit">Confirm</Button>
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
