import React, { Component } from 'react';
import style from './animation.css';
import { CSSTransitionGroup } from 'react-transition-group';

export default class List extends Component {

    renderItem = (text, i) => {
        const { onClickItem } = this.props;

        return (
            <div style={styles.item} onClick={() => onClickItem(i)} key={text}>
                {text}
            </div>
        );
    };

    render() {
        const { list } = this.props;

        return (
            <div style={styles.container}>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {list.map(this.renderItem)}
                </CSSTransitionGroup>
            </div>
        );
    };
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  }
};