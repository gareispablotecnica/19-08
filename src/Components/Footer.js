import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../Media/Logo/a.gif'
const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Sistema Solar © 2026</Text>
      <Text style={styles.subText}>Explorá el universo, planeta a planeta</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#16181d', // Mismo tono oscuro de las tarjetas
    borderTopWidth: 1,
    borderTopColor: '#26282e', // Borde sutil para separarlo del contenido
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  subText: {
    color: '#8e929d', // Tono grisáceo para texto secundario
    fontSize: 12,
  },
})