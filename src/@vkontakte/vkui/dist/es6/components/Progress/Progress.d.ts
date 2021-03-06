import { FunctionComponent, HTMLAttributes } from 'react';
import { HasRootRef } from '../../types';
export interface ProgressProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    value?: number;
}
declare const Progress: FunctionComponent<ProgressProps>;
export default Progress;
