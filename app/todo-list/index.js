/**
 * Created by juanfernandez-corugedoigual on 20/06/2017.
 */
import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, deleteTodo, toggleComplete}) => {

    const todosItems = todos.map((todo, i) => {
        return (
            <Todo key={i} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        );
    });

    return (
        <View>
            {todosItems}
        </View>
    );
};

export default TodoList;