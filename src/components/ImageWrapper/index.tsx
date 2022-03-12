import React from 'react';
import { Normal } from '../TextComponents';
import ParaBreak from '../ParaBreak';

function ImageWrapper({ src, caption }: { src: string; caption: string }) {
    return (
        <div style={{ width: '100%' }}>
            <a href={src} target="_blank" rel="noreferrer">
                <img style={{ width: '100%' }} src={src} alt="Img" />
            </a>
            <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                {caption}
            </Normal>
            <ParaBreak />
            <ParaBreak />
        </div>
    );
}

export default ImageWrapper;
