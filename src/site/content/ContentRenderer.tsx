import React from 'react';
import { Provider } from '@atlaskit/smart-card';
import { ReactRenderer } from '@atlaskit/renderer';
import SimpleCardClient from './SimpleCardClient';
import { extensionHandlers } from './extensions';
import { Content } from 'confluence-content-extractor/dist/confluence/api';
import { dataProviders } from './providers';

interface ContentRendererProps {
    content: Content;
}

export default function ContentRenderer({ content }: ContentRendererProps) {
    return (
        <div>
            <Provider client={new SimpleCardClient()}>
                <ReactRenderer
                    document={content.adfBody}
                    allowCopyToClipboard={true}
                    extensionHandlers={extensionHandlers(content)}
                    dataProviders={dataProviders()}
                />
            </Provider>
        </div>
    );
}
