import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

//@Ds
import { DsBox, DsFlex } from '@ds/layout';
import { DsImage, DsModal } from '@ds/components/global';
import { DsText } from '@ds/components/typography';

// types
import { Result } from 'src/models/list-rick-and-morty.types';

interface ListInfoRickAndMortyProps {
    listTableCharacter: Result[] | undefined;
}
const ListInfoRickAndMorty: React.FC<ListInfoRickAndMortyProps> = ({
    listTableCharacter,
}) => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Result>();

    const openModal = (item: Result) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <FlatList
                data={listTableCharacter}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item, index) => `${item}_${index}`}
                contentContainerStyle={{
                    gap: 14,
                    paddingLeft: 24,
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => openModal(item)}
                    >
                        <DsFlex flexDirection="column" width={150}>
                            <DsBox>
                                <DsImage
                                    source={{
                                        uri: item?.image,
                                    }}
                                    resizeMode="cover"
                                    height={185}
                                />
                            </DsBox>
                            <DsBox
                                flexDirection="column"
                                gap={6}
                                backgroundColor={'#87F54E'}
                                paddingHorizontal={12}
                                paddingVertical={8}
                            >
                                <DsFlex flexDirection="column">
                                    <DsText
                                        color="#4D4D4D"
                                        fontFamily="Inter_700Bold"
                                        fontSize={16}
                                        textTransform="capitalize"
                                    >
                                        Nome:
                                    </DsText>
                                    <DsText
                                        color="#4D4D4D"
                                        fontSize={14}
                                        fontFamily="Inter_300Light"
                                        textTransform="capitalize"
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {item?.name}
                                    </DsText>
                                </DsFlex>

                                <DsFlex flexDirection="column">
                                    <DsText
                                        color="#4D4D4D"
                                        fontFamily="Inter_700Bold"
                                        fontSize={16}
                                        textTransform="capitalize"
                                    >
                                        Status:
                                    </DsText>
                                    <DsText
                                        color="#4D4D4D"
                                        fontSize={14}
                                        fontFamily="Inter_300Light"
                                        textTransform="capitalize"
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {item?.status}
                                    </DsText>
                                </DsFlex>
                            </DsBox>
                        </DsFlex>
                    </TouchableOpacity>
                )}
            />

            <DsModal visible={modalVisible} onClose={closeModal}>
                <DsBox
                    backgroundColor="white"
                    padding={20}
                    borderRadius={10}
                    width={300}
                >
                    <DsText
                        color="#4D4D4D"
                        fontSize={14}
                        fontFamily="Inter_300Light"
                        textTransform="capitalize"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {selectedItem?.name}
                    </DsText>

                    <DsText
                        color="#4D4D4D"
                        fontSize={14}
                        fontFamily="Inter_300Light"
                        textTransform="capitalize"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {selectedItem?.status}
                    </DsText>

                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <DsText
                            color="blue"
                            fontSize={14}
                            fontFamily="Inter_300Light"
                            textTransform="capitalize"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            Fechar
                        </DsText>
                    </TouchableOpacity>
                </DsBox>
            </DsModal>
        </>
    );
};

export default ListInfoRickAndMorty;
