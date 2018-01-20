import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const AccountPanel = (props) => (
  <Panel style={props.containerStyle}>
    <Panel.Heading style={styles.panelHeading}>
      <Panel.Title>
        {props.title}
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      {props.children}
    </Panel.Body>
  </Panel>
);

AccountPanel.defaultProps = {
  containerStyle: {
    width: '45%',
    marginVertical: 20,
    marginLeft: '1.25%',
    marginRight: '1.25%',
    display: 'inline-block',
  },
};

const styles = {
  panelContainer: {},
  panelHeading: {},
};

export default AccountPanel;
