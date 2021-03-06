import { HTMLAttributes } from 'react';
declare type StatsType = 'playbackStarted' | 'click';
declare type BannerData = {
    title?: string;
    url_types?: string;
    bannerID?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageLink?: string;
    trackingLink?: string;
    type?: string;
    iconWidth?: number;
    domain?: string;
    ctaText?: string;
    advertisingLabel?: string;
    iconLink?: string;
    statistics?: Array<{
        type: StatsType;
        url: string;
    }>;
    openInBrowser?: boolean;
    iconHeight?: number;
    directLink?: boolean;
    navigationType?: string;
    description?: string;
    ageRestriction?: number;
};
export interface PromoBannerProps extends HTMLAttributes<HTMLDivElement> {
    /** Данные рекламного баннера, полученные из VKWebAppGetAds */
    bannerData: BannerData;
    /** Флаг скрытия кнопки закрытия рекламы */
    isCloseButtonHidden?: boolean;
    /** Хандлер закрытия рекламы */
    onClose: () => void;
}
declare const PromoBanner: (props: PromoBannerProps) => JSX.Element;
export default PromoBanner;
