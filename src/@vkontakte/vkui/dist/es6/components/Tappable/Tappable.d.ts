import { Component, ElementType, HTMLAttributes } from 'react';
import { TouchEventHandler, TouchProps } from '../Touch/Touch';
import { VKUITouchEventHander } from '../../lib/touch';
import { HasPlatform, HasRootRef, OldRef, RefWithCurrent } from '../../types';
export interface TappableProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasPlatform {
    Component: ElementType;
    activeEffectDelay?: number;
    disabled?: boolean;
    stopPropagation?: boolean;
    href?: string;
    target?: string;
}
export interface TappableState {
    clicks?: {
        [index: string]: {
            x: number;
            y: number;
        };
    };
    active?: boolean;
    ts?: number;
}
export interface RootComponentProps extends TouchProps {
    ref?: OldRef<HTMLElement> | RefWithCurrent<HTMLElement>;
}
export interface StorageItem {
    activeTimeout: number;
    timeout?: number;
    stop(): void;
}
export interface Storage {
    [index: string]: StorageItem;
}
export declare type GetStorage = () => StorageItem;
export declare const ACTIVE_DELAY = 70;
export declare const ACTIVE_EFFECT_DELAY = 600;
declare class Tappable extends Component<TappableProps, TappableState> {
    constructor(props: TappableProps);
    id: string;
    isSlide: boolean;
    insideTouchRoot: boolean;
    container: HTMLElement;
    timeout: number;
    wavesTimeout: number;
    static defaultProps: TappableProps;
    onStart: TouchEventHandler;
    onMove: TouchEventHandler;
    onEnd: TouchEventHandler;
    onDown: VKUITouchEventHander;
    start: VoidFunction;
    stop: VoidFunction;
    getStorage: GetStorage;
    getRef: OldRef<HTMLElement>;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: typeof Tappable;
export default _default;
