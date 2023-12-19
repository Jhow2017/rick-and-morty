//components
import { DsBox } from "@ds/layout";
import { DsBoxType } from "@ds/layout/box";

interface LayoutPublicProps extends DsBoxType {}
const LayoutPrivate: React.FC<LayoutPublicProps> = (props) => {
    const { children, ...attr } = props;
    return (
        <DsBox {...attr} style={{ padding: 0 }} backgroundColor={"yellow"}>
            {children}
        </DsBox>
    );
};

export default LayoutPrivate;
