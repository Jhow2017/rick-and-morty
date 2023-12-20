import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

//@Ds
import { DsBox, DsFlex } from '@ds/layout';
import { DsImage, DsModal } from '@ds/components/global';
import { DsText } from '@ds/components/typography';

// types
import { Result } from 'src/models/list-rick-and-morty.types';
import ModalDetailsItem from '../modal-details';
import { useListStore } from 'src/store/listStore';

interface ListInfoRickAndMortyProps {
    listTableCharacter: Result[] | undefined;
}
const ListInfoRickAndMorty: React.FC<ListInfoRickAndMortyProps> = ({
    listTableCharacter,
}) => {
    const { modalVisible, selectedItem, setModalVisible, setSelectedItem } =
        useListStore();

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

            <DsModal visible={modalVisible} closeModal={closeModal} width={370}>
                <ModalDetailsItem />
            </DsModal>
        </>
    );
};

export default ListInfoRickAndMorty;
