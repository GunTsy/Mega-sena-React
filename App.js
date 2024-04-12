// Importa o módulo React do pacote 'react'
import React from 'react'
// Importa StyleSheet e SafeAreaView do pacote 'react-native'
import { StyleSheet, SafeAreaView } from 'react-native'

// Importa o componente Mega do arquivo './components/mega/Mega'
import Mega from './components/mega/Mega'

// Componente funcional que representa o aplicativo
export default () => (
    // Utiliza SafeAreaView para garantir que o conteúdo seja exibido em áreas seguras do dispositivo
    <SafeAreaView style={style.App}>
        {/* Renderiza o componente Mega com uma quantidade predefinida de números (7) */}
        <Mega qtdeNumeros={7} />
    </SafeAreaView>
)

// Define os estilos do componente App
const style = StyleSheet.create({
    App: {
        // flex 1 indica que o componente pode ocupar toda a área disponível
        flexGrow: 1,
        // Alinha os itens no centro verticalmente
        justifyContent: "center",
        // Alinha os itens no centro horizontalmente
        alignItems: "center",
        // Aplica padding de 20 em todas as direções
        padding: 20
    }
})
