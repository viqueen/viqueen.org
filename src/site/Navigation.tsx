import {
    AtlassianNavigation,
    CustomProductHome,
    generateTheme,
    PrimaryButton
} from '@atlaskit/atlassian-navigation';
import React from 'react';
import { siteProperties } from './properties';

const theme = generateTheme({
    name: 'high-contrast',
    backgroundColor: '#272727',
    highlightColor: '#E94E34'
});

const ConfluenceSiteHome = () => {
    return (
        <CustomProductHome
            iconAlt={siteProperties.title}
            iconUrl={siteProperties.iconUrl}
            logoAlt={siteProperties.title}
            logoUrl={siteProperties.iconUrl}
        />
    );
};

const HomeLink = () => {
    return (
        <a href="/" style={{ textDecoration: 'none' }}>
            <PrimaryButton isHighlighted={true}>
                {siteProperties.title}
            </PrimaryButton>
        </a>
    );
};

export default function Navigation() {
    return (
        <AtlassianNavigation
            label={siteProperties.title}
            primaryItems={[<HomeLink />]}
            renderProductHome={ConfluenceSiteHome}
            theme={theme}
        />
    );
}
