// Importa o módulo React e Component do pacote 'react'
import React, { Component }  from "react";
// Importa View, Text, TextInput e Button do pacote 'react-native'
import { View, Text, TextInput, Button } from "react-native";
// Importa o objeto de estilo Estilo do arquivo '../estilo'
import Estilo from "../estilo";

// Importa o componente MegaNumero do arquivo './MegaNumero'
import MegaNumero from './MegaNumero'

// Componente de classe Mega, estendendo Component do React
export default class Mega extends Component {

    // Define o estado inicial com a quantidade de números e uma lista vazia de números
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    // Método para alterar a quantidade de números
    alterarQtdeNumero = (qtde) => {
        // Atualiza o estado qtdeNumeros com o valor convertido para número
        this.setState({ qtdeNumeros: +qtde })
    }

    // Função para gerar um número não contido na lista de números gerados
    gerarNumeroNaoContido = nums => {
        // Gera um novo número aleatório entre 1 e 60
        const novo = parseInt(Math.random() * 60) + 1
        // Verifica se o novo número já está na lista de números gerados, se sim, chama recursivamente a função até encontrar um novo número
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // Função para gerar a lista de números da Mega-Sena
    gerarNumeros = () => {
        // Preenche um array com a quantidade de números definida no estado e gera números não contidos na lista
        const numeros = Array(this.state.qtdeNumeros).fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        // Atualiza o estado com a lista de números gerados
        this.setState({ numeros })
    }

    // Função para exibir os números gerados
    exibirNumeros = () => {
        // Obtém a lista de números do estado
        const nums = this.state.numeros
        // Mapeia os números e retorna um componente MegaNumero para cada número na lista
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    // Renderiza o componente Mega
    render() {
        return (
            <>
                {/* Título do gerador de números da Mega-Sena */}
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                </Text>
                {/* Campo de entrada para a quantidade de números */}
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}                
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
                {/* Botão para gerar os números */}
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                {/* Container para exibir os números gerados */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {/* Renderiza os números gerados */}
                    {this.exibirNumeros()}
                </View>
                
            </>
        )
    }
}
