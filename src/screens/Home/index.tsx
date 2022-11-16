
import { Container } from './styles';
import { CardProduto } from '@components/CardProduto';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import axios from "axios";
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';


const baseUrl = 'https://w-vendas.herokuapp.com/api/carrinho/';


export function Home(){

    const [produtos, setProdutos] = useState();
    
    const navigation = useNavigation();

    async function postCaixa() {
        navigation.navigate('Vendas');
        // try {
        //    await axios.post(baseUrl, {
        //         valor_da_compra: 5,
        //         quantidade: 2,
        //         produtos: [1,2]
        //     }).then((response) => {
        //         setProdutos(response.data);
        //         console.log('tudo certo');
        //     });
        // } catch (error) {
        //     return 'deu merda';
        // }
    }

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
                keyExtractor={item => item.id}
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
                  scrollEnabled
            />
            
            <Button
                addPost={postCaixa}
                title='fazer um post'
            />
        </Container>
    );
}