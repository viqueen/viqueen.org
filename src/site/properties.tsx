import viqueenIcon from './assets/viqueen-icon.png';

export type SiteProperties = {
    title: string;
    iconUrl: string;
    contentTitlePrefix: string;
};

export const siteProperties: SiteProperties = {
    title: 'viqueen.org',
    iconUrl: viqueenIcon,
    contentTitlePrefix: '/vi - '
};
