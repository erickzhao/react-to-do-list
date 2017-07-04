import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        const { children } = this.props;

        return (
            <div style={}>
                <div>{children}</div>
            </div>
        )
    }
}

const styles = {
  header: {
    backgroundColor: "skyblue",
    padding: 15
  },
  title: {
    textAlign: "center",
    color: "white"
  }
};