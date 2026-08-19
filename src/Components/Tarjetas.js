// rnfes  + Enter 
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React from 'react'
import Img1 from '../Media/Planetas/1.png'
import Img2 from '../Media/Planetas/2.png'
import Img3 from '../Media/Planetas/3.jpg'
import Img4 from '../Media/Planetas/4.png'
import Img5 from '../Media/Planetas/5.png'
import Img6 from '../Media/Planetas/6.png'
import Img7 from '../Media/Planetas/7.png'
import Img8 from '../Media/Planetas/8.png'

const Tarjetas = () => {
    return (
        <View style={styles.Tarjetas}>
            <View style={styles.Planetas}>
                <Image
                    source={Img1}
                    resizeMode='cover'
                    style={styles.ImgFondo}
                />
                <View style={styles.info}>
                    <Text style={styles.Nombre}>Mercurio</Text>
                    <Text style={styles.Des}>Es el planeta más cercano al Sol y el más pequeño del Sistema Solar. Tiene una superficie rocosa y presenta temperaturas muy extremas entre el día y la noche.</Text>
                    <Text style={styles.Dis}>77 millones de km</Text>
                </View>
            </View>
            <View style={styles.Planetas}>
                <Image
                    source={Img2}
                    resizeMode='cover'
                    style={styles.ImgFondo}
                />
                <View style={styles.info}>
                    <Text style={styles.Nombre}>Venus</Text>
                    <Text style={styles.Des}>Es el planeta más cercano al Sol y el más pequeño del Sistema Solar. Tiene una superficie rocosa y presenta temperaturas muy extremas entre el día y la noche.</Text>
                    <Text style={styles.Dis}>77 millones de km</Text>
                </View>
            </View>
            <View style={styles.Planetas}>
                <Image
                    source={Img3}
                    resizeMode='cover'
                    style={styles.ImgFondo}
                />
                <View style={styles.info}>
                    <Text style={styles.Nombre}>Tierra</Text>
                    <Text style={styles.Des}>Es el planeta más cercano al Sol y el más pequeño del Sistema Solar. Tiene una superficie rocosa y presenta temperaturas muy extremas entre el día y la noche.</Text>
                    <Text style={styles.Dis}>77 millones de km</Text>
                </View>
            </View>
            <View style={styles.Planetas}>
                <Image
                    source={Img4}
                    resizeMode='cover'
                    style={styles.ImgFondo}
                />
                <View style={styles.info}>
                    <Text style={styles.Nombre}>Marte</Text>
                    <Text style={styles.Des}>Es el planeta más cercano al Sol y el más pequeño del Sistema Solar. Tiene una superficie rocosa y presenta temperaturas muy extremas entre el día y la noche.</Text>
                    <Text style={styles.Dis}>77 millones de km</Text>
                </View>
            </View>
        </View>
    )
}

export default Tarjetas

const styles = StyleSheet.create({

    Planetas:{
        width:'100%',
        height:280,
        backgroundColor:'#1D2128',
        borderWidth:2,
        borderColor:'rgba(255, 255, 255, 0.1)',
        borderRadius:15,
        elevation:10,
        shadowColor:"#ffffff68",
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity:0.5,
        shadowRadius:0.6,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    },
    ImgFondo:{
        width:'50%',
        height:'100%',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
    },
    info:{
        padding:15,
        flex:1,
    },
    Nombre:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:10,
    },
    Des:{
        color:'#fff',
        marginBottom:5,
    },
    Dis:{
        textAlign:'center',
        color:'#008455',
        fontWeight:'bold',
        fontSize:16,
    },
})