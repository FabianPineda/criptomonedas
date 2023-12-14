import React, {useState, useEffect} from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const Formulario = (props) => {

    const {moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarAPI} = props

    const [ criptomonedas, guardarCriptomonedas ] = useState([])
    
    useEffect( () => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            guardarCriptomonedas(resultado.data.Data)
        }
        
            consultarAPI()
    }, [])

    const cotizarPrecio = () => {
        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            mostrarAlerta()
            return
        }
        guardarConsultarAPI(true)
    }

    const mostrarAlerta = () => {
        Alert.alert('Error...', 'Ambos campos son obligatorios')
    }
 
  return (
    <View>
        <Text style={styles.label} >Moneda</Text>

        <Picker selectedValue={moneda} onValueChange={moneda => guardarMoneda(moneda)} itemStyle={{ height : 120 }} >
            <Picker.Item label='--- Seleccione ---' value='' />
            <Picker.Item label='Dolar Estadounidense' value='USD' />
            <Picker.Item label='Peso Mexicano' value='MXN' />
            <Picker.Item label='Euro' value='EUR' />
            <Picker.Item label='Libra Esterlina' value='GBP' />
        </Picker>
        
        <Text style={styles.label} >Criptomoneda</Text>

        <Picker selectedValue={criptomoneda} onValueChange={cripto => guardarCriptomoneda(cripto)} itemStyle={{ height : 12 }}>
            <Picker.Item label='--- Seleccione ---' value='' />
            {criptomonedas.map( cripto => (
                <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
            )) }
        </Picker>

        <TouchableHighlight style={styles.btnCotizar} onPress={ () => cotizarPrecio() } >
            <Text style={styles.textoCotizar}>Cotizar</Text>
        </TouchableHighlight>

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
    },
    btnCotizar : {
        backgroundColor : '#5E49E2',
        padding : 10,
        marginTop : 20
    },
    textoCotizar : {
        color : '#FFF',
        fontSize : 18,
        fontFamily : 'Lato-Black',
        textTransform : 'uppercase',
        textAlign : 'center',
        fontWeight : 'bold'
    }
})

export default Formulario
