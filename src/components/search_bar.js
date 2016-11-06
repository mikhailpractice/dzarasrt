import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: 'Test One' };
  }

  /* This way does not work, WHY???
    onInputChange(event) {
      this.setState({ term: event.target.value });
      //console.log(event.target.value);
    }

    render() {
      return (
        <div>
          <input onChange={this.onInputChange} />
          Value of the input: {this.state.term}
        </div>
      )
    }
  */


  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        Value of the input: {this.state.term}
      </div>
    )
  }


}

export default SearchBar;
