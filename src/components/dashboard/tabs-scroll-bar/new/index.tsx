import { useQuery } from '@apollo/client';

// querys
import { GET_LIST_RICK_AND_MORTY } from 'src/services/querys/list-rick-and-morty';

// types
import { ListRickAndMorty } from 'src/models/list-rick-and-morty.types';

// designer-system
import { DsBox } from '@ds/layout';
import { DsText } from '@ds/components/typography';

//components
import ListInfoRickAndMorty from './flatlist';

const NewFlatList = () => {
    const { data, loading, error } = useQuery<ListRickAndMorty>(
        GET_LIST_RICK_AND_MORTY
    );

    if (loading)
        return (
            <DsText
                color="#DBDBDB"
                fontFamily="Inter_700Bold"
                fontSize={19}
                textTransform="capitalize"
            >
                Carregando...
            </DsText>
        );
    if (error)
        return (
            <DsText
                color="red"
                fontFamily="Inter_700Bold"
                fontSize={19}
                textTransform="capitalize"
            >
                {error.message}
            </DsText>
        );

    return (
        <DsBox>
            <ListInfoRickAndMorty
                listTableCharacter={data?.characters?.results}
            />
        </DsBox>
    );
};

export default NewFlatList;
