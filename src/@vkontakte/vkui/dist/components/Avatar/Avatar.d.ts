import { FunctionComponent, ImgHTMLAttributes } from 'react';
import { HasRootRef } from '../../types';
export interface AvatarProps extends ImgHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement> {
    size?: 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24;
    src?: string;
    mode?: 'default' | 'image' | 'app';
}
declare const Avatar: FunctionComponent<AvatarProps>;
export default Avatar;
