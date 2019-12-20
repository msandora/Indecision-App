import React from 'react';
import { connect } from 'react-redux'
import { startAddOption } from '../actions/options';

export class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // this.props.startAddOption(option);

    this.setState(() => ({
      error
    }));
    // Clear Input 
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  } 
}

const mapDispatchToProps = (dispatch) => ({
  startAddOption: (option) => dispatch(startAddOption(option))
});

export default connect(undefined, mapDispatchToProps)(AddOption);
