import React from 'react';
import StickyBox from '../../components/StickyBox';
import ParaBreak from '../../components/ParaBreak';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import {
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
    f17,
    f18,
    f19,
    f20,
} from './texts';

import i1 from '../../assets/fp/1.png';
import i2 from '../../assets/fp/2.png';
import i3 from '../../assets/fp/3.png';
import i4 from '../../assets/fp/4.png';
import i5 from '../../assets/fp/5.png';
import i6 from '../../assets/fp/6.png';
import i7 from '../../assets/fp/7.png';
import i8 from '../../assets/fp/8.png';
import i9 from '../../assets/fp/9.png';
import i10 from '../../assets/fp/10.png';
import i11 from '../../assets/fp/11.png';
import i12 from '../../assets/fp/12.png';
import ims from '../../assets/fp/ms.png';
import ici from '../../assets/fp/ci.png';
import ImageWrapper from '../../components/ImageWrapper';

const Quote = ({ children, notBold = false }: { children?: any; notBold?: boolean }) => {
    return (
        <Normal
            style={{
                fontSize: '22px',
                fontWeight: notBold ? 'normal' : 'bold',
                fontStyle: 'italic',
                paddingLeft: '30px',
                marginRight: '50px',
                borderLeft: '5px solid #4A4A4A',
            }}>
            {children}
        </Normal>
    );
};

function FinalProject() {
    return (
        <PageWrapper>
            <Heading>Final project</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 15 April 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <Normal>{f1}</Normal>
            <ParaBreak />
            <Normal>{f2}</Normal>
            <ParaBreak />
            <Normal>{f3}</Normal>
            <ul style={{ lineHeight: '25px' }}>
                <li>Uniqueness and originality</li>
                <li>Storytelling</li>
                <li>Representation of values</li>
                <li>Consistency in visual design</li>
                <li>Communication of messages</li>
                <li>Clarity in purpose</li>
            </ul>
            <ParaBreak />
            <ParaBreak />

            <StickyBox topic="Brainstorming">
                <ImageWrapper src={i1} caption={'Brainstorming sketches'} />
                <Normal>{f4}</Normal>
                <ParaBreak />
                <ParaBreak />
                <Quote>{'How does one combine symbols of coding and design together?'}</Quote>
                <ParaBreak />
                <ParaBreak />
                <Normal>{f5}</Normal>
                <ParaBreak />
                <Normal>{f6}</Normal>
                <ParaBreak />
                <Normal>{f7}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Process">
                <Normal>{f8}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={i2}
                    caption={'Proportional skeleton frame on the left, finished logo on the right'}
                />
                <Normal>{f9}</Normal>
                <ParaBreak />
                <Normal>{f10}</Normal>
                <ParaBreak />
                <Normal>{f11}</Normal>
                <ParaBreak />
                <Normal>{f12}</Normal>
                <ParaBreak />
                <ImageWrapper src={i3} caption={'Font window'} />
                <ImageWrapper src={i4} caption={'Creating each letter'} />
                <ImageWrapper
                    src={i5}
                    caption={
                        'Hybrid between a coding font (Source Code Pro) and a modern sans-serif (Lato)'
                    }
                />
                <Normal>{f13}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={ims}
                    caption={'Old purely mono-spaced font on the left, hybrid on the right'}
                />
                <ImageWrapper
                    src={i6}
                    caption={'Adjusting letter widths to make them seem equal in width'}
                />
                <Normal>{f14}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={i7}
                    caption={'Using offset path tool to increase width by 0p0.7 - 0p1'}
                />
                <ImageWrapper src={i8} caption={'Finished bold letters'} />
                <Normal>{f15}</Normal>
                <ParaBreak />
                <ImageWrapper src={i9} caption={'Finished infographic'} />

                <ImageWrapper src={ici} caption={'Two of the finished infographics'} />

                <Normal>{f16}</Normal>
                <ParaBreak />
                <ImageWrapper src={i10} caption={'Finished infographic'} />
                <ImageWrapper
                    src={i11}
                    caption={'Old brand layout (on the left) and new layout (on the right)'}
                />
            </StickyBox>

            <StickyBox topic="Presentation">
                <Normal>{f17}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={i12}
                    caption={
                        'Alignments before presentation (on the left) and after presentation (on the right)'
                    }
                />
                <Normal>{f18}</Normal>
                <ParaBreak />
                <Normal>{f19}</Normal>
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Conclusion">
                <Normal>{f20}</Normal>
                <ParaBreak />
            </StickyBox>
        </PageWrapper>
    );
}

export default FinalProject;
