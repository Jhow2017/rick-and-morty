import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Platform, View } from 'react-native';

// querys
import { GET_LIST_RICK_AND_MORTY } from 'src/services/querys/list-rick-and-morty';

// types
import { ListRickAndMorty } from 'src/models/list-rick-and-morty.types';

// designer-system
import { DsBox, DsFlex } from '@ds/layout';
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

    {
        error && (
            <DsText
                color="red"
                fontFamily="Inter_700Bold"
                fontSize={19}
                textTransform="capitalize"
            >
                {error.message}
            </DsText>
        );
    }

    return (
        <DsBox gap={24}>
            <DsFlex flexDirection="column" paddingHorizontal={24}>
                <DsInput
                    placeholder="Encontre um personagem"
                    value={nameFilter}
                    onChangeText={(text) => setNameFilter(text)}
                    type={'search'}
                    size={'small'}
                    backgroundColor={'#407772'}
                    placeholderTextColor="#fff"
                />

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
            </DsFlex>
            <DsBox marginBottom={100}>
                {data && (
                    <ListInfoRickAndMorty
                        listTableCharacter={data?.characters?.results}
                    />
                )}
            </DsBox>
        </DsBox>
    );
};

export default NewFlatList;
