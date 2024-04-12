// Importa o módulo React e os componentes Text, View e StyleSheet do pacote 'react-native'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
// Importa o objeto de estilo Estilo do arquivo '../estilo'
import Estilo from '../estilo'

// Componente funcional MegaNumero que recebe um número como propriedade
export default ({ num }) => {
    return (
        // Retorna um componente View que envolve um componente Texto para exibir o número
        <View style={style.Container}>
            {/* Texto para exibir o número */}
            <Text style={[Estilo.txtG, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

// Define os estilos do componente MegaNumero
const style = StyleSheet.create({
    // Estilos para o contêiner do número
    Container: {
        backgroundColor: '#000', // Cor de fundo preta
        height: 50, // Altura de 50 pixels
        width: 50, // Largura de 50 pixels
        margin: 5, // Margem de 5 pixels ao redor do contêiner
        borderRadius: 25, // Borda arredondada com raio de 25 pixels (metade da altura/largura para formar um círculo)
    },
    // Estilos para o número exibido
    Num: {
        color: '#FFF' // Cor do texto branca
    }
})
