/**
 * Created by juanfernandez-corugedoigual on 20/06/2017.
 */
import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos}) => {

    const todosItems = todos.map((todo, i) => {
        return (
            <Todo key={i} todo={todo} />
        );
    });

    return (
        <View>
            {todosItems}
        </View>
    );
};

export default TodoList;