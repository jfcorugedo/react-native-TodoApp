/**
 * Created by juanfernandez-corugedoigual on 18/06/2017.
 */

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

let todoIndex = 0;

class App extends Component {

    constructor() {
        super();
        console.log('\n**********************\n*  Building TodoApp  *\n**********************\n');
        this.state = {
            todos: [],
            inputValue: '',
            type: 'All'
        };
    }

    inputChange(inputValue) {
        console.log('Old value', this.state.inputValue);
        this.setState({ inputValue });
        console.log('New value', inputValue);
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
        this.setState({todos: this.state.todos, inputValue:''}, () => console.log(this.state));
    }

    render() {
        const { inputValue } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)} />
                    <Button submitTodo={() => this.submitTodo(this.state.inputValue)} />
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