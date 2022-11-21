import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;


export const BackIcon = styled(CaretLeft)`
    size: 32px;
    color: #FFFFFF;
`;