import React from 'react';
import './Grid.scss';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="grid">
        { React.Children.map(this.props.children, el => (
          <li className="grid__item">{el}</li>
        )) }
      </ul>
    );
  }
}

export default Grid;