import React, { ReactNode } from 'react';
import { OSType } from './lib/platform';
import { Insets } from '@vkontakte/vk-bridge';
export declare type FormStatusType = 'default' | 'error' | 'valid';
export declare type AlignType = 'left' | 'center' | 'right';
export declare type OldRef<T> = (el: T) => void;
export declare type RefWithCurrent<T> = {
    current: T | null;
};
export declare type Ref<T> = OldRef<T> | RefWithCurrent<T>;
export interface HasRootRef<T> {
    getRootRef?: Ref<T>;
}
export interface HasRef<T> {
    getRef?: Ref<T>;
}
export interface HasDangerHTML {
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}
export interface HasFormStatus {
    status?: FormStatusType;
}
export interface HasFormLabels {
    top?: ReactNode;
    bottom?: ReactNode;
}
export interface HasAlign {
    align?: AlignType;
}
export interface HasPlatform {
    /**
     * @ignore
     */
    platform?: OSType;
}
export interface HasInsets {
    /**
     * @ignore
     */
    insets?: Partial<Insets>;
}
export interface HasChildren {
    children?: React.ReactNode;
}
