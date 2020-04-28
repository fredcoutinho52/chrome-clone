import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Results() {
    return (
        <View style={styles.container}>
            <Text>Main Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})