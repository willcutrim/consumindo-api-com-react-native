
import { Container } from './styles';
import { CardProduto } from '@components/CardProduto';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import axios from "axios";

const baseUrl = 'https://w-vendas.herokuapp.com/api/carrinho/';


export function Home(){

    const [produtos, setProdutos] = useState();

    async function fetchProdutos(){
        try {
            await axios.get(baseUrl).then((response) => {
                setProdutos(response.data);
            });
               
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        fetchProdutos();
    }, []);

    if (!produtos) return null;

    return(
        <Container>

            <FlatList
                data={produtos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <CardProduto
                    produto={'Qt: ' + item.quantidade}
                    valor={'valor: '+ item.valor_da_compra}
                />
                )}
                ListEmptyComponent={() => (
                    <Text>
                        Vazio...
                    </Text>
                  )}
            />
            
        </Container>
    );
}