import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 }
    ]
  };

  handleDelete = () => {
    console.log('Even handler called');
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counters => (
          <Counter
            key={counters.id}
            onDelete={this.handleDelete}
            value={counters.value}
            id={counters.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
