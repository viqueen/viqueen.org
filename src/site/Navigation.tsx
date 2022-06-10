import {
    AtlassianNavigation,
    CustomProductHome,
    generateTheme,
    PrimaryButton
} from '@atlaskit/atlassian-navigation';
import React from 'react';
import { siteProperties } from './properties';
import { Identifier } from 'confluence-content-extractor/dist/confluence/api';

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

const SiteLink = ({ title, href }: Identifier & { href: string }) => {
    return (
        <a href={href} style={{ textDecoration: 'none' }}>
            <PrimaryButton>{title}</PrimaryButton>
        </a>
    );
};

type NavigationProps = {
    siteLinks: (Identifier & { href: string })[];
};

export default function Navigation({ siteLinks }: NavigationProps) {
    const links = siteLinks.map(SiteLink);
    return (
        <AtlassianNavigation
            label={siteProperties.title}
            primaryItems={[<HomeLink />, ...links]}
            renderProductHome={ConfluenceSiteHome}
            theme={theme}
        />
    );
}
