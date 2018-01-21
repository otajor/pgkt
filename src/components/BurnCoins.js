import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import AccountPanel from './AccountPanel';

class RepayDebt extends Component {
  render() {
    return (
      <AccountPanel
        isTopRightContainer
        title='Burn Coins'
        style={this.props.containerStyle}
      >
        <div style={styles.div}>
          <Form>
            <Col xs={5} md={5}>
              <FormGroup controlId="repayDebt" style={styles.enterAmount}>
                <FormControl type="number" placeholder="Enter Amount" />
              </FormGroup>
            </Col>
            <Col xs={2} md={2}>
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
    paddingTop: 10,
  },
  enterAmount: {
    display: 'flex',
    flex: 'row',
  },
};

export default RepayDebt;
