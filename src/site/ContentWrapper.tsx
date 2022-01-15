import React, { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner';
import { Content } from '../generator/confluence/api';
import axios from 'axios';
import ContentRenderer from './content/ContentRenderer';

export default function ContentWrapper() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<Content | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const { data } = await axios.get('data.json');
            setContent(data);
            setLoading(false);
        };
        // noinspection JSIgnoredPromiseFromCall
        fetchData();
    }, []);

    return (
        <>
            {loading && (
                <div style={{ margin: 60 }}>
                    <Spinner size="large" />
                </div>
            )}
            {!loading && content && content.asHomepage && (
                <div
                    style={{
                        overflowY: 'auto',
                        height: '90vh',
                        paddingBottom: 60
                    }}
                >
                    <ContentRenderer content={content} />
                </div>
            )}
        </>
    );
}
