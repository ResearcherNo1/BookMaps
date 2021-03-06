import React from 'react';
import { HasChildren } from '../../types';
export interface UsersStackProps extends React.HTMLAttributes<HTMLDivElement>, HasChildren {
    /**
     * Массив ссылок на фотографии
     */
    photos?: string[];
    /**
     * Размер аватарок
     */
    size?: 's' | 'm';
    /**
     * Вертикальный режим рекомендуется использовать с размером `m`
     */
    layout?: 'vertical' | 'horizontal';
    /**
     * Количество аватарок, которые будут показаны.
     * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
     */
    visibleCount?: number;
}
declare const _default: React.NamedExoticComponent<UsersStackProps>;
export default _default;
