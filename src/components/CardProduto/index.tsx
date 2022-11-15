import { Container, Text, Text2} from './styles';

type Props = {
    produto: string;
    valor: string;
}


export function CardProduto({ produto, valor}: Props){
    return(
        <Container>
            <Text>
                {produto}
            </Text>

            <Text2>
                {valor}
            </Text2>
        </Container>
    );
}