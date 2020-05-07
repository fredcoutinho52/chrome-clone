import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native'

export default function Results({ navigation }) {
    const search = navigation.getParam('searchResults')

    return (
        <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? 25 : 0 }]}>
            <ScrollView>
                { search.length === 0
                ? <Text>Não encontramos resultados para sua pesquisa</Text>
                : (
                    search.map(item => (
                        <View key={item.cacheId} style={styles.resultCard}>
                            <Text style={styles.resultLink}>{item.link}</Text>

                            <Text style={styles.resultTitle}>{item.title}</Text>
                            <Text style={styles.resulSnippet}>{item.snippet}</Text>
                        </View>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    resultCard: {
        width: 400,
        backgroundColor: '#FFF',
        margin: 5,
        padding: 8,
        borderRadius: 15,
        elevation: 4,
    },

    resultLink: {
        fontSize: 12,
        color: '#3C4043',
        marginVertical: 8
    },

    resultTitle: {
        fontSize: 16,
        color: '#1967D2',
        marginBottom: 5
    },

    resulSnippet: {
        fontSize: 14,
        color: '#000',
    }
})