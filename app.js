import React, { Component } from 'react';

import List from './List';
import Input from './Input';
import Title from './Title';

export default class App extends Component {

    state = {
        todos: ['Click to Remove', 'Wash dishes', 'Fold clothes', 'Take out trash']
    };

    onAddTodo = (text) => {
        const { todos } = this.state;

        this.setState({
            todos: [text, ...todos]
        });
        console.log(this.state);
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
    fontFamily: 'sans-serif',
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  }
}