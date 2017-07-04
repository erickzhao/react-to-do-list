import React, { Component } from 'react';

import List from './List';
import Input from './Input';
import Title from './Title';

export default class App extends Component {

    state = {
        todos: ['Click to Remove', 'First thing', 'Second thing', 'Third thing']
    };

    onAddTodo = (text) => {
        const { todos } = this.state;

        this.setState({
            todos: [text, ...todos]
        });
    };

    onRemoveTodo = (index) => {
        const { todos } = this.state;

        this.setState({
            todos: todos.filter((el, i) => i !== index)
        });
    };

    render() {
        const { todos } = this.state;

        return (
            <div style={styles.container}>
                <Title>
                    To-do List
                </Title>
                <Input
                    placeholder={'Type a To-Do, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onClickItem={this.onRemoveTodo}
                />
            </div>
        )
    }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
}