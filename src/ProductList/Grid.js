import React, { Component } from 'react';
import './Grid.scss';

class Grid extends Component {
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