import { Container } from './styles';

import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { InputText } from '@components/Input';
import { Header } from '@components/Header';

const baseUrl = 'http://10.0.2.2:8000/api/carrinho/';

// const baseUrl = 'https://w-vendas.herokuapp.com/api/carrinho/';

export function Vendas() {

    const [produtos, setProdutos] = useState('');
    const [valor, setValor] = useState('');
    const navigation = useNavigation();
    
    async function postCaixa() {
        
        try {
           await axios.post(baseUrl, {
                valor_da_compra: valor,
                quantidade: produtos,
                produtos: [1,2,3]
            }).then((response) => {
                if (response.status === 201) {
                    navigation.goBack(); 
                }
            });
        } catch (error) {
            return 'deu merda';
        }
    }

    return(
        <Container>
            {/* <Header/> */}
            <InputText
                title='quantiadde'
                onChangeText={setProdutos}
                defaultValue={produtos}
            />
            <InputText
                title='valor'
                onChangeText={setValor}
                defaultValue={valor}
            />
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