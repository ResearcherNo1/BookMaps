import { Component, CSSProperties, HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TouchEvent } from '../Touch/Touch';
import { HasChildren, HasPlatform } from '../../types';
export declare const transitionStartEventName = "VKUI:View:transition-start";
export declare const transitionEndEventName = "VKUI:View:transition-end";
declare enum SwipeBackResults {
    fail = 1,
    success = 2
}
interface Scrolls {
    [index: string]: number;
}
export declare type TransitionStartEventDetail = {
    scrolls: Scrolls;
};
declare type AnimationEventHandler = (e?: AnimationEvent) => void;
declare type TransitionEventHandler = (e?: TransitionEvent) => void;
interface HeaderSwipeStyles {
    title?: CSSProperties;
    left?: CSSProperties;
    addon?: CSSProperties;
    right?: CSSProperties;
}
export interface ViewProps extends HTMLAttributes<HTMLElement>, HasChildren, HasPlatform {
    activePanel: string;
    header?: boolean;
    popout?: ReactNode;
    modal?: ReactNode;
    onTransition?(params: {
        isBack: boolean;
        from: string;
        to: string;
    }): void;
    onSwipeBack?(): void;
    onSwipeBackStart?(): void;
    history?: string[];
    id?: string;
}
export interface ViewState {
    scrolls: Scrolls;
    animated: boolean;
    startT?: Date;
    visiblePanels: string[];
    activePanel: string;
    isBack: boolean;
    prevPanel: string;
    nextPanel: string;
    swipingBack: boolean;
    swipebackStartX: number;
    swipeBackShift: number;
    swipeBackNextPanel: string;
    swipeBackPrevPanel: string;
    swipeBackResult: SwipeBackResults;
    browserSwipe: boolean;
}
declare class View extends Component<ViewProps, ViewState> {
    constructor(props: ViewProps);
    static defaultProps: Partial<ViewProps>;
    static contextTypes: {
        isWebView: PropTypes.Requireable<boolean>;
        window: PropTypes.Requireable<any>;
        document: PropTypes.Requireable<any>;
    };
    get document(): any;
    get window(): any;
    get panels(): any[];
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ViewProps, prevState: ViewState): void;
    waitTransitionFinish(elem: HTMLElement, eventHandler: TransitionEventHandler): void;
    waitAnimationFinish(elem: HTMLElement, eventHandler: AnimationEventHandler): void;
    blurActiveElement(): void;
    pickPanel(id: string): HTMLElement;
    transitionEndHandler: (e?: AnimationEvent) => void;
    swipingBackTransitionEndHandler: (e?: TransitionEvent) => void;
    onSwipeBackSuccess(): void;
    onSwipeBackCancel(): void;
    onScrollTop: () => void;
    onMoveX: (e: TouchEvent) => void;
    onEnd: () => void;
    calcPanelSwipeStyles(panelId: string): CSSProperties;
    calcHeaderSwipeStyles(panelId: string): HeaderSwipeStyles;
    render(): JSX.Element;
}
declare const _default: typeof View;
export default _default;
