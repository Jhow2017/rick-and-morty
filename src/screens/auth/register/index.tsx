import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native';

//@Ds
import { DsBox, DsFlex } from '@ds/layout';
import DsIcon from '@ds/components/global/icon';
import DsInput from '@ds/components/form/input';
import DsLink from '@ds/components/global/link';
import { DsText } from '@ds/components/typography';
import DsButton from '@ds/components/global/button';
import DsDivider from '@ds/components/global/divider';

//components
import Header from 'src/components/header';
import LayoutPublic from '@components/layout/public';

const RegisterTypesSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be atleast 6 characters' }),
});

// extracting the type
type SignInTypes = z.infer<typeof RegisterTypesSchema>;

const RegisterScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInTypes>({
        resolver: zodResolver(RegisterTypesSchema),
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<SignInTypes> = (data) => {
        console.log(data);
    };

    // const navigation = useNavigation();

    // const handleNavigate = () => {
    //     // Alguma lógica antes de navegar
    //     console.log("Navegando para a rota Detalhes");
    //     navigation.navigate("Detalhes");
    // };

    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic paddingBottom={74}>
                <Header marginTop={Platform.OS === 'ios' ? 64 : 32} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <DsFlex marginTop={47} flexDirection="column">
                        <DsText
                            color="#F2F2F2"
                            fontSize={30}
                            lineHeight={35}
                            fontWeight="700"
                            textAlign="center"
                            textTransform="capitalize"
                        >
                            Cadastro
                        </DsText>

                        <DsText
                            color="#E1E1E1"
                            fontSize={12}
                            marginTop={22}
                            textAlign="center"
                        >
                            Se você precisar de algum suporte{' '}
                            <DsLink
                                color={'#38B432'}
                                fontSize={12}
                                textAlign="center"
                                textTransform="capitalize"
                                url="https://www.linkedin.com/in/jonathan-gama-2365a4187/"
                            >
                                click here
                            </DsLink>
                        </DsText>

                        <DsFlex flexDirection="column" gap={16} marginTop={26}>
                            <Controller
                                control={control}
                                name="fullName"
                                render={({ field }) => (
                                    <DsInput
                                        type="text"
                                        size="medium"
                                        id="fullName"
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        placeholder="Nome Completo"
                                        error={
                                            errors.fullName &&
                                            errors.fullName.message
                                        }
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <DsInput
                                        type="text"
                                        size="medium"
                                        id="email"
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        placeholder="E-mail"
                                        error={
                                            errors.email && errors.email.message
                                        }
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <DsInput
                                        size="medium"
                                        id="password"
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        type="password"
                                        placeholder="Senha"
                                        error={
                                            errors.password &&
                                            errors.password.message
                                        }
                                    />
                                )}
                            />
                        </DsFlex>

                        <DsBox>
                            <DsButton
                                variant="secondary"
                                size="large"
                                paddingHorizontal={36}
                                fontWeight="700"
                                lineHeight={22}
                                borderRadius={30}
                                marginTop={22}
                                onPress={handleSubmit(onSubmit)}
                                width={'100%'}
                            >
                                Entrar
                            </DsButton>
                        </DsBox>
                    </DsFlex>
                </TouchableWithoutFeedback>
                <DsFlex
                    marginTop={31}
                    alignItems="center"
                    justifyContent="center"
                    gap={8}
                >
                    <DsDivider
                        gradient={{
                            colors: ['#252525', '#5B5B5B'],
                            start: [1, 0],
                            end: [0, 0],
                        }}
                        width={150}
                        height={1}
                    />
                    <DsText fontSize={14} color="#DCDCDC" bottom={2}>
                        Ou
                    </DsText>
                    <DsDivider
                        gradient={{
                            colors: ['#252525', '#5B5B5B'],
                            start: [0, 0],
                            end: [1, 0],
                        }}
                        width={150}
                        height={1}
                    />
                </DsFlex>

                <DsFlex
                    justifyContent="center"
                    alignItems="center"
                    gap={60}
                    marginTop={50}
                >
                    <DsIcon icon="google-logo" size={32} />
                    <DsIcon icon="apple-logo" size={30} />
                </DsFlex>
                <DsText
                    color="#DBDBDB"
                    fontSize={14}
                    textAlign="center"
                    fontWeight="700"
                    textTransform="capitalize"
                    marginTop={22}
                >
                    Não é um membro ?{' '}
                    <DsLink
                        color={'#288CE9'}
                        fontSize={14}
                        fontWeight="700"
                        textTransform="capitalize"
                        url="https://www.linkedin.com/in/jonathan-gama-2365a4187/"
                    >
                        Registrar agora
                    </DsLink>
                </DsText>
            </LayoutPublic>
        </ScrollView>
    );
};

export default RegisterScreen;
