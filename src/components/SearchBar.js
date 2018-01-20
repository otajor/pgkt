import React, { Component } from 'react';
import { Button, FormGroup, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {
  render() {

    const itemsLayout = {
      height: this.props.height * 0.8,
      marginTop: this.props.height * 0.075, // temporary hack to vertically center it
      ...styles.verticalAlignment,
    };

    return (
      <div>
        <Button style={itemsLayout}>
          <Glyphicon glyph="glyphicon glyphicon-search" />
        </Button>
        <input type="text" style={{ ...itemsLayout, ...styles.inputBox }}>
        </input>
      </div>
    );
  }
}

const styles = {
  verticalAlignment: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  inputBox: {
    width: '60%',
  }
};

export default SearchBar;
