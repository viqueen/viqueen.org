import viqueenIcon from './assets/logo/8.png';

export type SiteProperties = {
    title: string;
    iconUrl: string;
    contentTitlePrefix: string;
    backgroundColor: string;
    highlightColor: string;
};

export const siteProperties: SiteProperties = {
    title: 'viqueen.org',
    iconUrl: viqueenIcon,
    contentTitlePrefix: '/vi - ',
    backgroundColor: 'rgb(255, 235, 230)',
    highlightColor: 'rgb(23, 43, 77)'
};
