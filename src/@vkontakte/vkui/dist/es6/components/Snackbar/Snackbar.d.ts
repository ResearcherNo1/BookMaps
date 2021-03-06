import React, { HTMLAttributes, PureComponent, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { HasPlatform } from '../../types';
import { TouchEvent } from '../Touch/Touch';
export interface SnackbarProps extends HTMLAttributes<HTMLElement>, HasPlatform {
    /**
     * Название кнопки действия в уведомлении
     */
    action?: string | React.ComponentType;
    /**
     * Будет вызвано при клике на кнопку действия
     */
    onActionClick?: (e: MouseEvent) => {};
    /**
     * Цветная иконка 24x24 пикселя
     */
    before?: React.ComponentType;
    /**
     * Контент в правой части, может быть `<Avatar size={32} />`
     */
    after?: React.ComponentType;
    /**
     * Варианты расположения кнопки
     */
    layout?: 'vertical' | 'horizontal';
    /**
     * Время в миллисекундах, через которое плашка скроется
     */
    duration?: number;
    /**
     * Обработчик закрытия уведомления
     */
    onClose: () => {};
}
export interface SnackbarState {
    closing: boolean;
    touched: boolean;
}
declare class Snackbar extends PureComponent<SnackbarProps, SnackbarState> {
    constructor(props: SnackbarProps);
    static defaultProps: {
        duration: number;
    };
    static contextTypes: {
        window: PropTypes.Requireable<any>;
        document: PropTypes.Requireable<any>;
    };
    private innerEl;
    private readonly bodyElRef;
    private closeTimeout;
    private shiftXPercent;
    private shiftXCurrent;
    private touchStartTime;
    private animationFrame;
    componentDidMount(): void;
    componentWillUnmount(): void;
    get window(): any;
    setCloseTimeout: () => void;
    clearCloseTimeout: () => void;
    private readonly onActionClick;
    close(): void;
    waitTransitionFinish(element: HTMLElement, eventHandler: VoidFunction): void;
    getInnerRef: (el: HTMLDivElement) => HTMLDivElement;
    onTouchStart: () => void;
    onTouchMoveX: (event: TouchEvent) => void;
    onTouchEnd: () => void;
    setBodyTransform(percent: number): void;
    render(): JSX.Element;
}
declare const _default: typeof Snackbar;
export default _default;
