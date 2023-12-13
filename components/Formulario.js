import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Formulario = () => {

    const [ moneda, guardarMoneda ] = useState('')
    const [ criptomoneda, guardarCriptomoneda ] = useState('')
    
    useEffect( () => {
        const consultarAPI = () => {
            
        }
    }, [])

  return (
    <View>
        <Text style={styles.label} >Moneda</Text>
        <Picker selectedValue={moneda} onValueChange={moneda => guardarMoneda(moneda)} >
            <Picker.Item label='--- Seleccione ---' value='' />
            <Picker.Item label='Dolar Estadounidense' value='USD' />
            <Picker.Item label='Peso Mexicano' value='MXN' />
            <Picker.Item label='Euro' value='EUR' />
            <Picker.Item label='Libra Esterlina' value='GBP' />
        </Picker>
        <Text style={styles.label} >Criptomoneda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    label : {
        fontFamily : 'Lato-Black',
        textTransform : 'uppercase',
        fontSize : 22,
        marginVertical : 20,
        textAlign: 'center'
    }
})

export default Formulario
