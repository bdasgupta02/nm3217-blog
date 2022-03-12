import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import ParaBreak from '../../components/ParaBreak';
import ImageWrapper from '../../components/ImageWrapper';
import StickyBox from '../../components/StickyBox';
import './assignment2.css';

import {
    intro1,
    intro2,
    intro3,
    intro4,
    process1,
    process2,
    process3,
    process4,
    process5,
    process6,
    process7,
    process8,
    process9,
    process10,
    process11,
    process12,
    critique1,
    critique2,
    critique3,
    learning1,
    learning2,
} from './texts';

import processimg1 from '../../assets/a2/a2-process-1.png';
import processimg2 from '../../assets/a2/a2-process-2.png';
import processimg3 from '../../assets/a2/a2-process-3.png';
import processimg5 from '../../assets/a2/a2-process-5.png';
import processimg6 from '../../assets/a2/a2-process-6.png';
import processimg7 from '../../assets/a2/a2-process-7.png';

import critiqueimg1 from '../../assets/a2/a2-critique-1.png';
import critiqueimg2 from '../../assets/a2/a2-critique-2.png';

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

function Assignment2() {
    return (
        <PageWrapper>
            <Heading>Assignment 2: "Storytime!"</Heading>
            <div style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 12 March 2022</div>
            <div style={{ height: 150, width: 1 }} />

            <Normal>{intro1}</Normal>
            <ParaBreak />
            <Normal>{intro2}</Normal>
            <ParaBreak />
            <ParaBreak />
            <Quote>{intro3}</Quote>
            <ParaBreak />
            <ParaBreak />
            <Normal>{intro4}</Normal>
            <ParaBreak />
            <ParaBreak />

            <StickyBox topic="Process">
                <Normal>{process1}</Normal>
                <ParaBreak />
                <Normal>{process2}</Normal>
                <ul style={{ lineHeight: '25px' }}>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Movement</span>: through imbalanced
                        angles, composition and motion blur.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Emotion</span>: through lighting and
                        color grading.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Suspense</span>: through the setting of
                        the scene and selective focus.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Comfort</span>: through softer shadows,
                        neutral color grading and homely items on the set.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Dramatic irony</span>: through
                        selective focus and a narrative over multiple shots (4-6 for eg.).
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Violence</span>: through composition
                        and disharmonious placement of objects (eg. last image).
                    </li>
                </ul>
                <ParaBreak />
                <Normal>{process3}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={processimg7}
                    caption={
                        'Satisfied pink bowl (left), angry/jealous/frustrated yellow bowl (center) and satisfied yellow bowl (right)'
                    }
                />

                <Normal>{process4}</Normal>
                <ParaBreak />
                <Normal>{process5}</Normal>
                <ParaBreak />
                <Normal>{process6}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={processimg3}
                    caption={'Different lighting alternatives for image 6'}
                />
                <Quote notBold>
                    {'I am forever chasing light. Light turns the ordinary into the magical.'}
                </Quote>
                <Quote>{'- Trent Parke, Photographer'}</Quote>
                <ParaBreak />
                <ParaBreak />
                <Normal>{process7}</Normal>
                <ParaBreak />
                <Normal>{process8}</Normal>
                <ParaBreak />

                <Normal>{process9}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={processimg1}
                    caption={'Adjusting colors and white-balance on Photoshop'}
                />
                <Normal>{process10}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={processimg2}
                    caption={'Image 6 has more height than the first 3 images'}
                />
                <Normal>{process11}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={processimg5}
                    caption={'The grid with different vertical border alignments for each row'}
                />
                <Normal>{process12}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={processimg6}
                    caption={'Using clipping mask to fit images to each frame'}
                />
            </StickyBox>

            <StickyBox topic="Critique">
                <Normal>{critique1}</Normal>
                <ParaBreak />
                <Normal>{critique2}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={critiqueimg1}
                    caption={'Old copy of images 4 and 5 shot in f/1.8'}
                />
                <ImageWrapper
                    src={critiqueimg2}
                    caption={'New copy of images 4 and 5 shot in f/6 - f/8 with less blur'}
                />
                <Normal>{critique3}</Normal>
            </StickyBox>

            <StickyBox topic="Learning points">
                <Normal>{learning2}</Normal>
                <ParaBreak />
                <Normal>{learning1}</Normal>
                <ul style={{ lineHeight: '25px' }}>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Essays</span>: where each paragraph
                        serves as an individual idea to form something bigger.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Paintings</span>: where each stroke on
                        a canvas contributes to a larger meaning.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Music</span>: where chords or notes
                        create an emotion for the listener when put together.
                    </li>
                </ul>

                <ParaBreak />
                <ParaBreak />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c' }}>
                    {"This assignment actually surprised me - it was quite a fun and eye-opening experience!"}
                </Normal>
            </StickyBox>
        </PageWrapper>
    );
}

export default Assignment2;
