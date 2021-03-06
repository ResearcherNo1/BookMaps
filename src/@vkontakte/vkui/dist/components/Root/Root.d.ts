import { Component, HTMLAttributes, ReactNode } from 'react';
import { Requireable } from 'prop-types';
import { HasPlatform } from '../../types';
export interface RootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
    activeView: string;
    onTransition?(params: {
        isBack: boolean;
        from: string;
        to: string;
    }): void;
    popout?: ReactNode;
    modal?: ReactNode;
}
export declare type AnimationEndCallback = (e?: AnimationEvent) => void;
export interface RootState {
    activeView: string;
    prevView: string;
    nextView: string;
    visibleViews: [string] | [string, string];
    isBack: boolean;
    scrolls: {
        [index: string]: number;
    };
    transition: boolean;
}
export interface RootContext {
    document: Requireable<object>;
    window: Requireable<object>;
}
declare class Root extends Component<RootProps, RootState> {
    constructor(props: RootProps);
    static defaultProps: Partial<RootProps>;
    static contextTypes: RootContext;
    get document(): any;
    get window(): any;
    get arrayChildren(): any[];
    componentDidUpdate(prevProps: RootProps, prevState: RootState): void;
    waitAnimationFinish(elem: HTMLElement, eventHandler: AnimationEndCallback): void;
    onAnimationEnd: AnimationEndCallback;
    blurActiveElement(): void;
    render(): JSX.Element;
}
declare const _default: typeof Root;
export default _default;
