/**
 * Created by juanfernandez-corugedoigual on 18/06/2017.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Input from './Input';
import Button from './Button';

class Adder extends Component {

    constructor(props) {
        super(props);
        this.state = {todoTask: ''};
    }

    taskChange(newTodoTask) {
        this.setState({todoTask: newTodoTask})
    }

    render() {

        const {submitTodo} = this.props;

        return (
            <View style={styles.adder}>
                <Input
                    inputValue={this.state.todoTask}
                    inputChange={(text) => this.taskChange(text)} />
                <Button submitTodo={() => {this.setState({todoTask: ''}); submitTodo(this.state.todoTask)} } />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    adder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Adder;