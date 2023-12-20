import { TouchableOpacity } from 'react-native';

// types
import { Result } from 'src/models/list-rick-and-morty.types';

//@Ds
import { DsBox } from '@ds/layout';
import { DsImage } from '@ds/components/global';
import { DsText } from '@ds/components/typography';

interface ModalDetailsItemProps {
    selectedItem: Result | undefined;
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalDetailsItem: React.FC<ModalDetailsItemProps> = ({
    selectedItem,
    modalVisible,
    setModalVisible,
}) => {
    return (
        <DsBox
            backgroundColor="white"
            padding={20}
            borderRadius={10}
            width={'100%'}
            height={'100%'}
        >
            <DsImage
                source={{ uri: selectedItem?.image }}
                resizeMode="cover"
                height={185}
            />
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

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
    );
};

export default ModalDetailsItem;
