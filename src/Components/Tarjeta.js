import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useState, useEffect } from 'react'
import { ObtenerDatos } from '../services/Planetas'


const Tarjeta = () => {
  const [Planetas, setPlanetas] = useState([])
  useEffect(() => {
    const MostrarPlanetas = async () => {
      try {
        const Info = await ObtenerDatos()
        console.log('Tabla Obtenida')
        setPlanetas(Info)
      }
      catch (error) {
        console.error('Error de Server: ', error.message)
      }
    }
    MostrarPlanetas()
  }, [])

  return (
    <View style={styles.container}>
      {Planetas.map((i) => (
        <View style={styles.Tarjetas} key={i.ID_Planetas}>
            <Text style={styles.titulo}>{i.Nombre}</Text>
            <Text style={styles.Descripcion}>{i.Descripcion}</Text>
        </View>
      ))}
    </View>
  )
}

export default Tarjeta

const styles = StyleSheet.create({})