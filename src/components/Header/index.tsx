import { useNavigation } from '@react-navigation/native';
import { Container, BackButton, BackIcon } from "./styles";


export function Header(){
    const navigation = useNavigation();
    return(
        
        <Container>
            <BackButton onPress={() => navigation.goBack()}>
                <BackIcon/>
            </BackButton>
        </Container>
    );
}
