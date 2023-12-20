// types
import { Result } from 'src/models/list-rick-and-morty.types';

//@Ds
import { DsBox } from '@ds/layout';
import { DsImage } from '@ds/components/global';
import { DsText } from '@ds/components/typography';

interface ModalDetailsItemProps {
    selectedItem: Result | undefined;
}
const ModalDetailsItem: React.FC<ModalDetailsItemProps> = ({
    selectedItem,
}) => {
    return (
        <DsBox width={'100%'}>
            <DsBox>
                <DsImage
                    source={{
                        uri: selectedItem?.image,
                    }}
                    resizeMode="cover"
                    height={300}
                />
            </DsBox>
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
        </DsBox>
    );
};

export default ModalDetailsItem;
