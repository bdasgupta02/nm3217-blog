import React from 'react';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import eimg from '../../assets/le/e.png';
import ImageWrapper from '../../components/ImageWrapper';
import { e1, e2, e3, e4, e5 } from './texts';

function LEE() {
    return (
        <PageWrapper>
            <Heading>Exercise E: An object that makes me creative</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 20 February 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <ImageWrapper src={eimg} caption="The bad text in question" />
            <Normal>This was painful. Let's get into it.</Normal>
            <ParaBreak />
            <ParaBreak />

            <StickyBox topic="1. Upper case">
                <Normal>{e1}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="2. Font">
                <Normal>{e2}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="3. Discord due to similarity">
                <Normal>{e3}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="4. Paragraph alignment">
                <Normal>{e4}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Improvements">
                <Normal>{e5}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>
        </PageWrapper>
    );
}

export default LEE;
