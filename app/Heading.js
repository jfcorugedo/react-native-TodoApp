/**
 * Created by juanfernandez-corugedoigual on 18/06/2017.
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>todos</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 50
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(172, 47, 47, 0.25)',
        fontWeight: '100'
    }
});

export default Heading;