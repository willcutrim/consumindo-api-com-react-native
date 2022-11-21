import { Input } from "./styles";
import { TextInputProps } from 'react-native';


type Props =  TextInputProps &{
    title:string;
}

export function InputText( { title , ...rest}: Props){
    return (
        <Input
            {...rest}
            placeholder={title}
        />
    );
}