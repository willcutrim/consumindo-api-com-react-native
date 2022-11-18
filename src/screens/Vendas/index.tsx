import { Container } from './styles';
import { Text } from 'react-native';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'http://10.0.2.2:8000/api/carrinho/';

// const baseUrl = 'https://w-vendas.herokuapp.com/api/carrinho/';

export function Vendas() {

    const [produtos, setProdutos] = useState();
    const navigation = useNavigation();
    
    async function postCaixa() {
        
        try {
           await axios.post(baseUrl, {
                valor_da_compra: 34,
                quantidade: 3,
                produtos: [1,2,3]
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