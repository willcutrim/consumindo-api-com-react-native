import { Container } from './styles';
import { Text } from 'react-native';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'https://w-vendas.herokuapp.com/api/carrinho/';

export function Vendas() {

    const [produtos, setProdutos] = useState();
    const navigation = useNavigation();
    
    async function postCaixa() {
        navigation.navigate('Vendas');
        try {
           await axios.post(baseUrl, {
                valor_da_compra: 65,
                quantidade: 2,
                produtos: [1,2]
            }).then((response) => {
                setProdutos(response.data);
                navigation.goBack(); 
            });
        } catch (error) {
            return 'deu merda';
        }
    }

    return(
        <Container>
            <Text>
                Olá
            </Text>
            <Button
                addPost={() => postCaixa() }
                title='Enviar'
            />
            <Button
                addPost={() => navigation.goBack()}
                title='Voltar'
            />
        </Container>
    );
}