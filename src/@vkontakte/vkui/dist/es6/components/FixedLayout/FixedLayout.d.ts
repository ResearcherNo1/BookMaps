import React, { HTMLAttributes } from 'react';
import { Requireable } from 'prop-types';
import { HasInsets, HasPlatform, HasRootRef, OldRef } from '../../types';
export interface FixedLayoutProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, HasInsets, HasPlatform {
    vertical?: 'top' | 'bottom';
    /**
     * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
     * Это часто необходимо для фиксированных кнопок в нижней части экрана.
     */
    filled?: boolean;
}
export interface FixedLayoutState {
    position: 'absolute' | null;
    top: number;
}
export interface FixedLayoutContext {
    panel: Requireable<string>;
    document: Requireable<{}>;
    hasTabbar: Requireable<boolean>;
}
declare class FixedLayout extends React.Component<FixedLayoutProps, FixedLayoutState> {
    state: FixedLayoutState;
    el: HTMLDivElement;
    static contextTypes: FixedLayoutContext;
    get document(): any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onViewTransitionStart: EventListener;
    onViewTransitionEnd: VoidFunction;
    getRef: OldRef<HTMLDivElement>;
    render(): JSX.Element;
}
declare const _default: typeof FixedLayout;
export default _default;
