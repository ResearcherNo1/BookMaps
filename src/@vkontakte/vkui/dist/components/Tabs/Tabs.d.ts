import { FunctionComponent, HTMLAttributes } from 'react';
import { HasRootRef } from '../../types';
export interface TabsProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    mode: 'default' | 'buttons' | 'segmented';
}
declare const Tabs: FunctionComponent<TabsProps>;
export default Tabs;
