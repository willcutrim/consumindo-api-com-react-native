import { Container, Title } from "./styled";
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    addPost: () => void;
}

export function Button({ title, addPost, ...rest }: Props){
    return(
        <Container onPress={addPost}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}