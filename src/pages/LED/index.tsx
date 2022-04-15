import React from 'react';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import d1img from '../../assets/le/d1.jpg';
import d2img from '../../assets/le/d2.jpg';
import d3img from '../../assets/le/d3.jpg';
import d4img from '../../assets/le/d4.jpg';
import d5img from '../../assets/le/d5.jpg';
import ImageWrapper from '../../components/ImageWrapper';
import { d1, d2, d3, d4, d5, d6 } from './texts';

function LED() {
    return (
        <PageWrapper>
            <Heading>Exercise D: Composing compositions</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 12 February 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <Normal>{d1}</Normal>
            <ul style={{ lineHeight: '25px' }}>
                <li>Framing</li>
                <li>Positioning</li>
                <li>Lighting</li>
                <li>Textures</li>
                <li>Emphasis</li>
            </ul>
            <ParaBreak />

            <StickyBox topic="Tier 1: Tourist" image={d1img}>
                <ImageWrapper src={d1img} caption="First image" />
                <Normal>{d2}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Tier 2: Creating a vibe" image={d2img}>
                <ImageWrapper src={d2img} caption="Second image" />
                <Normal>{d3}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Tier 3: Textures" image={d3img}>
                <ImageWrapper src={d3img} caption="Third image" />
                <Normal>{d4}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Tier 4: Emphasis" image={d4img}>
                <ImageWrapper src={d4img} caption="Fourth image" />
                <Normal>{d5}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Tier 5: Balance" image={d5img}>
                <ImageWrapper src={d5img} caption="Fifth image" />
                <Normal>{d6}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>
        </PageWrapper>
    );
}

export default LED;
