import React from 'react';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import cimg from '../../assets/le/c.jpg';
import ImageWrapper from '../../components/ImageWrapper';
import { c1, c2, c3 } from './texts';

function LEC() {
    return (
        <PageWrapper>
            <Heading>Exercise C: Signs and symbols of Heinz</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 6 February 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <ImageWrapper src={cimg} caption="Heinz ketchup ad" />
            <ParaBreak />
            <Normal>{c1}</Normal>
            <ParaBreak />
            <Normal>{c2}</Normal>
            <ParaBreak />
            <Normal>{c3}</Normal>
            <ParaBreak />
            <ParaBreak />
            <Normal style={{ fontStyle: 'italic' }}>
                {
                    "Little do people know, this is just an ad. If I die in 10 years, it's because of Heinz. Probably."
                }
            </Normal>
        </PageWrapper>
    );
}

export default LEC;
