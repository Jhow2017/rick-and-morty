import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

// querys
import { GET_LIST_RICK_AND_MORTY } from 'src/services/querys/list-rick-and-morty';

// types
import { ListRickAndMorty } from 'src/models/list-rick-and-morty.types';

// designer-system
import { DsBox } from '@ds/layout';
import { DsText } from '@ds/components/typography';
import DsInput from '@ds/components/form/input';

//components
import ListInfoRickAndMorty from './flatlist';

const NewFlatList = () => {
    const [nameFilter, setNameFilter] = useState('');

    const { data, loading, error } = useQuery<ListRickAndMorty>(
        GET_LIST_RICK_AND_MORTY,
        {
            variables: {
                page: 1,
                filter: { name: nameFilter ?? 'Morty' },
            },
        }
    );

    return (
        <DsBox>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DsInput
                        placeholder="Digite o nome"
                        value={nameFilter}
                        onChangeText={(text) => setNameFilter(text)}
                        type={'search'}
                        size={'small'}
                        TypeInput="flat"
                    />
                </View>

                {loading && (
                    <DsText
                        color="#DBDBDB"
                        fontFamily="Inter_700Bold"
                        fontSize={19}
                        textTransform="capitalize"
                    >
                        Carregando...
                    </DsText>
                )}
                {error && (
                    <DsText
                        color="red"
                        fontFamily="Inter_700Bold"
                        fontSize={19}
                        textTransform="capitalize"
                    >
                        {error.message}
                    </DsText>
                )}
            </KeyboardAvoidingView>
            {data && (
                <ListInfoRickAndMorty
                    listTableCharacter={data?.characters?.results}
                />
            )}
        </DsBox>
    );
};

export default NewFlatList;
