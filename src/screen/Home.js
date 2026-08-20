import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
// import Tarjetas from '../Components/Tarjetas'
import Footer from '../Components/Footer'
import Tarjeta from '../Components/Tarjeta'

const Home = () => {
    return (
        <View style={styles.app}>
            <Header />
            <ScrollView contentContainerStyle={styles.container}>
                {/* <Tarjetas /> */}
                <Tarjeta />
            </ScrollView>
            <Footer />
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    app: {
        flex: 1,
        // backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },

    container: {
        flexGrow: 1,
        paddingTop: 15,
    },
})