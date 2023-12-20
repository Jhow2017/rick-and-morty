import { TextInputProps, TextStyle } from 'react-native';

type InputTypes = 'text' | 'search' | 'date' | 'password' | 'number';
type FontFamily =
    | 'Inter_300Light'
    | 'Inter_400Regular'
    | 'Inter_500Medium'
    | 'Inter_700Bold'
    | 'Inter_900Black';

export type DsInputProps = Omit<TextInputProps, 'textAlign'> &
    TextStyle & {
        type: InputTypes;
        TypeInput?: 'flat' | 'outlined';
        size: 'small' | 'medium' | 'large';
        disabled?: string;
        error?: string;
        fontFamily?: FontFamily;
    };
