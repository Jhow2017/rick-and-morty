// types
import { Result } from 'src/models/list-rick-and-morty.types';

//@Ds
import { DsBox, DsFlex } from '@ds/layout';
import { DsDivider, DsImage } from '@ds/components/global';
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
            <DsBox
                width={'100%'}
                justifyContent="center"
                alignItems="center"
                backgroundColor={'#87F54E'}
                padding={16}
                borderBottomEndRadius={10}
                borderBottomStartRadius={10}
            >
                <DsText
                    color="#4D4D4D"
                    fontSize={32}
                    fontFamily="Inter_500Medium"
                    textTransform="capitalize"
                    textAlign="center"
                    marginTop={16}
                >
                    {selectedItem?.name}
                </DsText>

                <DsDivider
                    backgroundColor={'#4D4D4D'}
                    width={150}
                    height={2.5}
                />

                <DsFlex
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    width={'100%'}
                    marginTop={18}
                    gap={6}
                    flexDirection="column"
                >
                    {selectedItem?.status && (
                        <DsFlex
                            flexDirection="row"
                            gap={12}
                            alignItems="center"
                        >
                            <DsText
                                color="#4D4D4D"
                                fontSize={24}
                                fontFamily="Inter_700Bold"
                                textAlign="left"
                            >
                                Status:
                            </DsText>
                            <DsText
                                color="#4D4D4D"
                                fontSize={20}
                                fontFamily="Inter_400Regular"
                            >
                                {selectedItem?.status}
                            </DsText>
                        </DsFlex>
                    )}

                    {selectedItem?.species && (
                        <DsFlex
                            flexDirection="row"
                            gap={12}
                            alignItems="center"
                        >
                            <DsText
                                color="#4D4D4D"
                                fontSize={24}
                                fontFamily="Inter_700Bold"
                                textAlign="left"
                            >
                                Espécies:
                            </DsText>
                            <DsText
                                color="#4D4D4D"
                                fontSize={20}
                                fontFamily="Inter_400Regular"
                            >
                                {selectedItem?.species}
                            </DsText>
                        </DsFlex>
                    )}

                    {selectedItem?.gender && (
                        <DsFlex
                            flexDirection="row"
                            gap={12}
                            alignItems="center"
                        >
                            <DsText
                                color="#4D4D4D"
                                fontSize={24}
                                fontFamily="Inter_700Bold"
                                textAlign="left"
                            >
                                Gênero:
                            </DsText>
                            <DsText
                                color="#4D4D4D"
                                fontSize={20}
                                fontFamily="Inter_400Regular"
                            >
                                {selectedItem?.gender}
                            </DsText>
                        </DsFlex>
                    )}

                    {selectedItem?.origin?.name && (
                        <DsFlex
                            flexDirection="row"
                            gap={12}
                            alignItems="center"
                        >
                            <DsText
                                color="#4D4D4D"
                                fontSize={24}
                                fontFamily="Inter_700Bold"
                                textAlign="left"
                            >
                                Origem:
                            </DsText>
                            <DsText
                                color="#4D4D4D"
                                fontSize={20}
                                fontFamily="Inter_400Regular"
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                width={'70%'}
                            >
                                {selectedItem?.origin?.name}
                            </DsText>
                        </DsFlex>
                    )}

                    {selectedItem?.type && (
                        <DsFlex
                            flexDirection="row"
                            gap={12}
                            alignItems="center"
                        >
                            <DsText
                                color="#4D4D4D"
                                fontSize={24}
                                fontFamily="Inter_700Bold"
                                textAlign="left"
                            >
                                Tipo:
                            </DsText>
                            <DsText
                                color="#4D4D4D"
                                fontSize={20}
                                fontFamily="Inter_400Regular"
                            >
                                {selectedItem?.type}
                            </DsText>
                        </DsFlex>
                    )}
                </DsFlex>
            </DsBox>
        </DsBox>
    );
};

export default ModalDetailsItem;
