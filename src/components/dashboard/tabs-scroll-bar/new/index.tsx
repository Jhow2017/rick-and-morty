//@Ds
import { DsBox, DsFlex } from "@ds/layout";

//components
import ListMusic from "./flatlist";
import { DsText } from "@ds/components/typography";
import { DsIcon } from "@ds/components/global";

//images

const NewFlatList = () => {
    const listTableMusic = [
        {
            id: 1,
            title: "As It Was",
            description: "Harry Styles",
            hours: "5:33",
        },
        {
            id: 1,
            title: "God Did",
            description: "DJ Khaled",
            hours: "3:43",
        },
    ];
    return (
        <DsBox>
            <ListMusic />
            <DsBox marginTop={32} marginBottom={100} paddingHorizontal={24}>
                <DsFlex justifyContent="space-between">
                    <DsText
                        color="#DBDBDB"
                        fontFamily="Inter_700Bold"
                        fontSize={19}
                        textTransform="capitalize"
                    >
                        Playlist
                    </DsText>

                    <DsText
                        color="#C6C6C6"
                        fontFamily="Inter_400Regular"
                        fontSize={12}
                        textTransform="capitalize"
                    >
                        see more
                    </DsText>
                </DsFlex>
                <DsBox gap={16} marginTop={24}>
                    {listTableMusic?.map((item, index) => (
                        <DsBox
                            key={index}
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <DsFlex gap={24} alignItems="center">
                                <DsIcon
                                    icon="player"
                                    size={24}
                                    backgroundColor={"#2C2C2C"}
                                    height={42}
                                    width={42}
                                    justifyContent="center"
                                    alignItems="center"
                                    borderRadius={50}
                                />
                                <DsFlex flexDirection="column" gap={5}>
                                    <DsText
                                        color={"#fff"}
                                        fontSize={16}
                                        fontFamily="Inter_700Bold"
                                    >
                                        {item?.title}
                                    </DsText>
                                    <DsText
                                        color={"#fff"}
                                        fontSize={14}
                                        fontFamily="Inter_400Regular"
                                    >
                                        {item?.description}
                                    </DsText>
                                </DsFlex>
                            </DsFlex>
                            <DsFlex gap={50} alignItems="center">
                                <DsText
                                    color={"#fff"}
                                    fontSize={16}
                                    fontFamily="Inter_300Light"
                                >
                                    {item?.hours}
                                </DsText>
                                <DsIcon
                                    icon="favorite-active"
                                    size={28}
                                    color="#565656"
                                />
                            </DsFlex>
                        </DsBox>
                    ))}
                </DsBox>
            </DsBox>
        </DsBox>
    );
};

export default NewFlatList;
