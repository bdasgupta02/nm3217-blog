import React from 'react';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import bimg from '../../assets/le/b.jpg';
import b2img from '../../assets/le/b2.jpg';
import ImageWrapper from '../../components/ImageWrapper';
import { b1, b2, b3, b4, b5, b6, b7 } from './texts';

function LEB() {
    return (
        <PageWrapper>
            <Heading>Exercise B: Constructive criticism model</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 25 January 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <ImageWrapper src={bimg} caption="Las Meninas by Diego Velazquez" />

            <StickyBox topic="Description">
                <Normal>{b1}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Analysis">
                <Normal>{b2}</Normal>
                <ParaBreak />
                <Normal>{b3}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={b2img}
                    caption="Deriving a focal point using walls, lamps and paintings"
                />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Interpretation">
                <Normal>{b4}</Normal>
                <ParaBreak />
                <Normal>{b5}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Judgement">
                <Normal>{b6}</Normal>
                <ParaBreak />
                <Normal>{b7}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>
        </PageWrapper>
    );
}

export default LEB;
