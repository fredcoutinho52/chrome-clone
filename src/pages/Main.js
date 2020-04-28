import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, TextInput, Image } from 'react-native'

import logo from '../assets/logo.png'

export default function Main() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image source={logo} style={styles.image}/>

            <TextInput 
                style={styles.input} 
                placeholder="Pesquisar ou digitar endereço da Web"
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 230,
        height: 75,
        resizeMode: 'stretch',
    },

    input: {
        width: 380,
        height: 45,
        fontSize: 18,
        marginTop: 12,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: '#f5f5f5'
    },
})