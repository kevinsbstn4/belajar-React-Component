import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
    // tags: []
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags !</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}{' '}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
      // <div>
      //   {this.state.tags.length === 0 && 'Please create a new tag !'}
      //   {this.renderTags()}
      // </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : this.state.count;
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;

// styles = {
//   fontWeight: 'bold',
//   fontSize: 25
// };
// style={this.styles}
