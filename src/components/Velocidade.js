import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import styles from '../styles/velocidade'


const Velocidade = (props) => {
    console.log(props.title)
    const title = props.title !== undefined ? props.title :'Velocidade Media'
    const [distancia, setDistancia] = useState('')
    const [tempo, setTempo] = useState('')
    const [velocidade, setVelocidade] = useState('')

    const calcularVelocidade = () =>{
        if (distancia != '' && tempo != ''){  
        const v = distancia / tempo
        setVelocidade(v)
        }else{
            setVelocidade('Informe os valores corretamente!')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>


            <TextInput
                style={styles.Input}
                placeholder='distancia'
                value={distancia}
                onChangeText={setDistancia}
            />

            <TextInput
                style={styles.Input}
                placeholder='tempo'
                value={tempo}
                onChangeText={setTempo}
                keyboardType={'numeric'}
            />

            <TextInput
                style={styles.Input}
                placeholder='velocidade'
                value={velocidade}
                onChangeText={setVelocidade}
            />

            <Button
                color='black'
                title='Calcular'
                onPress={calcularVelocidade}
                />


        </View>
    )
}

export default Velocidade 