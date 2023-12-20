import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

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

const schema = z.object({
    nameFilter: z.string().min(3),
});

type FormValues = z.TypeOf<typeof schema>;

const HomeListCharacters = () => {
    const {
        register,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: 'onBlur',
    });

    const nameValue = watch('nameFilter');

    const onChangeSearchText = (text: string) => {
        setValue('nameFilter', text);
    };

    const { data, loading, error } = useQuery<ListRickAndMorty>(
        GET_LIST_RICK_AND_MORTY,
        {
            variables: {
                page: 1,
                filter: { name: nameValue },
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
                    {...register('nameFilter')}
                    placeholder="Encontre um personagem"
                    onChangeText={onChangeSearchText}
                    type={'search'}
                    size={'small'}
                    backgroundColor={'#407772'}
                    placeholderTextColor="#fff"
                    disabled={errors?.nameFilter?.message}
                    error={errors?.nameFilter?.message}
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

export default HomeListCharacters;
