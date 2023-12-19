import type { ReactNode } from 'react';
import { TextProps, TextStyle } from 'react-native';

export interface DsTextType extends TextStyle {
    children?: ReactNode;
    as?: 'p' | 'small' | 'span' | 'strong' | 'b';
    variant?: 'normal' | 'bold';
    size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
}