import React from 'react';

interface WidgetConnectorMacroProps {
    url: string;
}

const SPOTIFY_TRACK =
    /^https:\/\/open\.spotify\.com\/track\/(?<trackId>[a-zA-Z0-9]+)(\?.*)?$/;

export default function WidgetConnectorMacro({
    url
}: WidgetConnectorMacroProps) {
    const matcher = url.match(SPOTIFY_TRACK);
    if (!matcher) return <></>;
    const trackId = matcher.groups?.trackId;
    if (!trackId) return <></>;

    const embedUrl = `https://open.spotify.com/embed/track/${trackId}?`;
    return (
        <div style={{ textAlign: 'center' }}>
            <iframe
                style={{ borderRadius: 12 }}
                src={embedUrl}
                width="50%"
                height="380"
                frameBorder="0"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
        </div>
    );
}
