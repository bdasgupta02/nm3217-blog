import React from 'react';
import { Normal } from '../TextComponents';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './stickyBox.css';

function StickyBox({ topic, image, children }: { topic: string; image: string; children: any }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div style={{ width: '100%', marginTop: '20px' }}>
            <div className="SBSticky" style={{ top: isDesktop ? '5px' : '70px' }}>
                <Normal style={{ flex: 1, fontWeight: 'bold' }}>{topic}</Normal>
                {image !== '' && (
                    <img
                        style={{ height: 50, width: 50, backgroundColor: 'white' }}
                        alt={''}
                        src={image}
                    />
                )}
            </div>
            {children}
        </div>
    );
}

export default StickyBox;
