import React from 'react';
import { Validator } from 'prop-types';
import { Appearance, ConfigProviderContextInterface, Scheme, WebviewType } from './ConfigProviderContext';
import { HasChildren } from '../../types';
import { AppearanceSchemeType } from '@vkontakte/vk-bridge';
export interface ConfigProviderProps extends ConfigProviderContextInterface, HasChildren {
}
export interface ConfigProviderChildContextType {
    isWebView: Validator<boolean>;
    scheme: Validator<Scheme>;
    webviewType: Validator<WebviewType>;
    appearance: Validator<Appearance>;
    app: Validator<string>;
}
export default class ConfigProvider extends React.Component<ConfigProviderProps> {
    constructor(props: ConfigProviderProps);
    static defaultProps: ConfigProviderProps;
    static childContextTypes: ConfigProviderChildContextType;
    mapOldScheme(scheme: AppearanceSchemeType): AppearanceSchemeType;
    setScheme(scheme: AppearanceSchemeType): void;
    componentDidUpdate(prevProps: ConfigProviderProps): void;
    getChildContext(): ConfigProviderProps;
    render(): JSX.Element;
}
