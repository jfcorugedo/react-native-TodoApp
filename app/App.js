/**
 * Created by juanfernandez-corugedoigual on 18/06/2017.
 */

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './heading';
import Adder from './adder';
import TodoList from './todo-list';

let todoIndex = 0;

class App extends Component {

    constructor() {
        super();
        console.log('\n**********************\n*  Building TodoApp  *\n**********************\n');
        this.state = {
            todos: [],
            type: 'All'
        };
    }

    submitTodo(inputValue) {
        if(inputValue.match(/^\s*$/)) {
            return;
        }

        let todo = {
            title: inputValue,
            todoIndex: todoIndex,
            complete: false
        };

        todoIndex++;
        this.state.todos.push(todo);
        this.setState({todos: this.state.todos}, () => console.log('Current state', this.state));
    }

    toggleComplete(todo) {
        todo.complete = !todo.complete;
        this.setState({todos: this.state.todos});
    }

    deleteTodo(todo) {
        let {todos} = this.state;
        todos = todos.filter((todoItem) => todoItem.todoIndex !== todo.todoIndex);
        this.setState({todos});
    }

    render() {
        const { todos } = this.state;
        console.log('todos en app', todos);

        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <Heading />
                    <Adder submitTodo={ inputValue => this.submitTodo(inputValue) } />
                    <TodoList
                        todos={todos}
                        toggleComplete={(todo) => this.toggleComplete(todo)}
                        deleteTodo={(todo) => this.deleteTodo(todo)} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
});

export default App;