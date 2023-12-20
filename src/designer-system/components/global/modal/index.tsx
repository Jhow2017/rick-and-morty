import React from 'react';
import { Modal, ModalBaseProps } from 'react-native';

import { DsBox } from '@ds/layout';

interface DsModalProps extends ModalBaseProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const DsModal: React.FC<DsModalProps> = (props) => {
    const { visible, onClose, children, ...rest } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            {...rest}
        >
            <DsBox
                flex={1}
                justifyContent="center"
                alignItems="center"
                backgroundColor="rgba(0, 0, 0, 0.5)"
            >
                {children}
            </DsBox>
        </Modal>
    );
};

export default DsModal;
