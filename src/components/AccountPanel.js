import React from 'react';
import { Panel } from 'react-bootstrap';

const AccountPanel = (props) => (
  <Panel
    bsStyle="info"
    style={props.containerStyle}
  >
    <Panel.Heading style={styles.panelHeading}>
      <Panel.Title>
        {props.title}
      </Panel.Title>
    </Panel.Heading>
    {props.formatAsBody
      ? (
        <Panel.Body>
          {props.children}
        </Panel.Body>
      )
      : props.children
    }
  </Panel>
);

AccountPanel.defaultProps = {
  containerStyle: {
    width: '47.5%',
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
