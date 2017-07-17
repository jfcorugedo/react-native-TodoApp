/**
 * Created by juanfernandez-corugedoigual on 18/06/2017.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Button = ({ submitTodo }) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={submitTodo}>
            <Text style={styles.submit}>add</Text>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingRight: 2,
        paddingLeft: 2,
        backgroundColor: '#ffffff',
        width: 50,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666666',
        fontWeight: "600"
    }
});

export default Button;