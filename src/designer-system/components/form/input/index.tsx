import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';

//utils
import { transformPlaceholder } from 'src/utils/transformPlaceholder';

//types
import { DsInputProps } from './type';

//@ds
import { DsFlex } from '@ds/layout';
import DsIcon from '@ds/components/global/icon';
import ComponentMounter from '@ds/core/component-mounter';
import { DsText } from '@ds/components/typography';

const DsInput = forwardRef<TextInput, DsInputProps>(
    ({ type, ...props }, ref) => {
        const { children, textTransform, placeholder, error, ...attr } = props;

        //states
        const [showPassword, setShowPassword] = useState<boolean>(false);
        return (
            <ComponentMounter position="relative">
                <DsFlex position="relative">
                    <TextInput
                        {...(props as TextInputProps)}
                        ref={ref}
                        placeholderTextColor={
                            attr.placeholderTextColor || '#6f6f6f'
                        }
                        placeholder={transformPlaceholder(
                            placeholder,
                            textTransform
                        )}
                        secureTextEntry={type === 'password' && !showPassword}
                        style={{
                            ...(attr.style as ViewStyle),
                            width: attr?.width ?? '100%',
                            height: attr?.height,
                            borderRadius: attr?.borderRadius ?? 10,
                            borderWidth: attr?.borderWidth ?? 1,
                            borderColor: attr?.borderColor ?? '#363535',
                            color: attr?.color ?? '#fff',
                            fontSize: attr?.fontSize ?? 16,
                            fontStyle: attr?.fontStyle ?? 'normal',
                            fontWeight: attr?.fontWeight ?? '700',
                            padding: attr?.padding ?? 16,
                            fontFamily: attr?.fontFamily ?? 'Inter_400Regular',
                        }}
                    />
                    {type === 'password' && (
                        <DsIcon
                            icon={showPassword ? 'eye-show' : 'eye-hide'}
                            position="absolute"
                            size={26}
                            right={30}
                            color={'#5B5B5B'}
                            onPress={() => setShowPassword((prev) => !prev)}
                        />
                    )}

                    {type === 'search' && (
                        <DsIcon
                            icon={'search'}
                            position="absolute"
                            size={26}
                            right={30}
                            color={'#fff'}
                        />
                    )}
                </DsFlex>
                {error && (
                    <DsText color={'red'} marginTop={16}>
                        {error}
                    </DsText>
                )}
            </ComponentMounter>
        );
    }
);

export default DsInput;
