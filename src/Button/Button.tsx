import React, { Component, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  id: string;
};

export class Button extends Component<IProps> {
  render() {
    return (
      <button id={this.props.id}>
        {this.props.children}
      </button>
    );
  }
}
