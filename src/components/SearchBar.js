import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onChange(e) {
    const { target: { value } } = e;
    this.setState({ input: value });
  }

  onPressEnter(e) {
    const { input } = this.state;
    if(e.key === 'Enter' && input){
      this.props.onSubmit(input);
    }
  }

  render() {
    const itemsLayout = {
      height: this.props.navbarHeight * 0.8,
      marginTop: this.props.navbarHeight * 0.075, // temporary hack to vertically center it
      ...styles.verticalAlignment,
    };

    return (
      <div>
        <Button
          style={itemsLayout}
          onClick={() => this.state.input && this.props.onSubmit(this.state.input)}
        >
          <Glyphicon glyph="glyphicon glyphicon-search" />
        </Button>
        <input
          type="text"
          value={this.state.input}
          onChange={e => this.onChange(e)}
          onKeyPress={e => this.onPressEnter(e)}
          style={{ ...itemsLayout, ...styles.inputBox }}
          placeholder="Enter Phone Number..."
          autoFocus={!this.props.currentAccount}
        >
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
