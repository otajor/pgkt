import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const AccountPanel = (props) => (
  <Panel style={props.containerStyle}>
    <Panel.Heading style={styles.panelHeading}>
      <Panel.Title>
        {props.title}
      </Panel.Title>
    </Panel.Heading>
    {props.children}
  </Panel>
);

AccountPanel.defaultProps = {
  containerStyle: {
    width: '40%',
    display: 'inline-block',
  },
};

const styles = {
  panelContainer: {},
  panelHeading: {},
};

export default AccountPanel;
