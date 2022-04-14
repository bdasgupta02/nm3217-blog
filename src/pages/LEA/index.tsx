import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';

import aimg from '../../assets/le/a.png';
import ImageWrapper from '../../components/ImageWrapper';

import { a1, a2, a3 } from './texts';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';

function LEA() {
    return (
        <PageWrapper>
            <Heading>Exercise A: An object that makes me creative</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 15 January 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <StickyBox topic="Problem">
                <Normal>{a1}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Solution">
                <ImageWrapper src={aimg} caption="Creative Focus-er 3000" />
                <Normal>{a2}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="How it works">
                <Normal>{a3}</Normal>
            </StickyBox>
        </PageWrapper>
    );
}

export default LEA;
