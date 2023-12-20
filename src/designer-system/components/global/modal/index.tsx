import React from 'react';
import { Modal, ModalBaseProps } from 'react-native';

import { DsBox } from '@ds/layout';
import { DsBoxType } from '@ds/layout/box';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DsText } from '@ds/components/typography';
import DsIcon from '../icon';

interface DsModalProps extends ModalBaseProps, DsBoxType {
    visible: boolean;
    closeModal?: () => void;
    children: React.ReactNode;
}

const DsModal: React.FC<DsModalProps> = (props) => {
    const { visible, children, ...attr } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={attr?.closeModal}
            {...(props as ModalBaseProps)}
            style={{
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <DsBox
                flex={1}
                justifyContent="center"
                alignItems="center"
                backgroundColor="rgba(0, 0, 0, 0.5)"
            >
                <DsBox
                    position="relative"
                    borderRadius={10}
                    backgroundColor={attr?.backgroundColor || '#fff'}
                    height={attr?.height || 'auto'}
                    width={attr?.width || '100%'}
                    padding={attr?.padding || 24}
                    paddingTop={42}
                    {...(props as DsBoxType)}
                >
                    {attr.closeModal && (
                        <DsBox width={'100%'}>
                            <DsIcon
                                icon="close"
                                size={24}
                                color="red"
                                onPress={attr?.closeModal}
                                position="absolute"
                                right={-12}
                                bottom={10}
                            />
                        </DsBox>
                    )}

                    {children}
                </DsBox>
            </DsBox>
        </Modal>
    );
};

export default DsModal;
