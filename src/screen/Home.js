import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Tarjetas from '../Components/Tarjetas'


const Home = () => {
    return (
        <View style={styles.app}>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                <Tarjetas />
            </ScrollView>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal:10,
        paddingVertical:15,
    },
    container: {
        flex: 1, // Cambiado de flex: 1 a flexGrow: 1 para evitar problemas de corte en el scroll
    }
})