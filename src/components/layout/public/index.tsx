//components
import { DsBox } from "@ds/layout";
import { DsBoxType } from "@ds/layout/box";

interface LayoutPublicProps extends DsBoxType {}
const LayoutPublic: React.FC<LayoutPublicProps> = (props) => {
    const { children, ...attr } = props;
    return (
        <DsBox
            {...attr}
            flex={attr?.flex ?? 1}
            alignItems={attr.alignItems ?? "center"}
            backgroundColor={attr.backgroundColor ?? "#1C1B1B"}
            paddingHorizontal={attr?.paddingHorizontal ?? 24}
        >
            {children}
        </DsBox>
    );
};

export default LayoutPublic;
