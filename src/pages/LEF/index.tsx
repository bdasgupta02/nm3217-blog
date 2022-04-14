import React from 'react';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import fimg from '../../assets/le/f.jpg';
import f2img from '../../assets/le/f2.png';
import ImageWrapper from '../../components/ImageWrapper';

function LEF() {
    return (
        <PageWrapper>
            <Heading>Exercise F: Create your own color scheme</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 6 March 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <ImageWrapper src={fimg} caption="The picture itself" />
            <ImageWrapper src={f2img} caption="Color scheme" />

            <ParaBreak />
            <ParaBreak />

            <Normal>
                “Very short” was in upper case on lecture slides so I'll take it seriously.
            </Normal>
            <ParaBreak />
            <Normal>
                <span style={{ fontWeight: 'bold' }}>Blue</span> = Calm, Comforting, Wonder,
                Daylight
            </Normal>
            <ParaBreak />
            <Normal>
                <span style={{ fontWeight: 'bold' }}>Yellow</span> = Fire, Energy, Liveliness
            </Normal>
            <ParaBreak />
            <Normal>
                <span style={{ fontWeight: 'bold' }}>Orange</span> = Sunset, Fire, Comfort
            </Normal>
            <ParaBreak />
            <Normal>
                <span style={{ fontWeight: 'bold' }}>Black</span> = Rest, Sleep, Comfort, Mystery
            </Normal>
        </PageWrapper>
    );
}

export default LEF;
