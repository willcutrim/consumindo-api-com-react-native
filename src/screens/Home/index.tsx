
import { Container } from './styles';
import { CardProduto } from '@components/CardProduto';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import axios from "axios";
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';


const baseUrl = 'http://10.0.2.2:8000/api/carrinho/';
// const baseUrl = 'https://w-vendas.herokuapp.com/api/carrinho/';



export function Home(){

    const [produtos, setProdutos] = useState();

    const navigation = useNavigation();
    
    async function fetchProdutos(){
        
        try {
            const res = await axios.get(baseUrl).then((response) => {
                setProdutos(response.data);
            });
            return res;
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
                        produto={'produtos: ' + item.quantidade}
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
                addPost={() => navigation.navigate('Vendas')}
                title='fazer um post'
            />
        </Container>
    );
}