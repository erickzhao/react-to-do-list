import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        const { children } = this.props;

        return (
            <div style={styles.header}>
                <h1 style={styles.title}>{children}</h1>
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