import React, { useState } from 'react'
import { KeyboardAvoidingView, View, StyleSheet, TextInput, Image } from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'

export default function Main({ navigation }) {
    const [search, setSearch] = useState('')

    async function googleSearch() {
        const apiKey = 'YOUR-API-KEY'
        const searchEngineId = 'YOUR-SEARCH-ENGINE-ID'
        
        const response = await api.get(`v1?key=${apiKey}&cx=${searchEngineId}&q=${search}`)

        navigation.navigate('Results', { searchResults: response.data.items })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image source={logo} style={styles.image}/>

            <TextInput 
                style={styles.input} 
                placeholder="Pesquisar ou digitar endereço da Web"
                returnKeyType="search"
                autoFocus={true}
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={googleSearch}
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