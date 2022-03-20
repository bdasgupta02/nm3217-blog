import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import ParaBreak from '../../components/ParaBreak';
import {
    intro1,
    intro2,
    intro3,
    brain1,
    brain2,
    brain3,
    brain4,
    proc1,
    proc2,
    proc3,
    proc4,
    proc5,
    crit1,
    crit2,
    crit3,
    crit4,
    crit5,
    other1,
    other2,
    refl1,
    refl2,
} from './texts';
import StickyBox from '../../components/StickyBox';

import a31 from '../../assets/a3/a3-1.png';
import a32 from '../../assets/a3/a3-2.png';
import a33 from '../../assets/a3/a3-3.png';
import a34 from '../../assets/a3/a3-4.png';
import a35 from '../../assets/a3/a3-5.png';
import a36 from '../../assets/a3/a3-6.png';
import a37 from '../../assets/a3/a3-7.png';
import a38 from '../../assets/a3/a3-8.png';
import a39 from '../../assets/a3/a3-9.png';
import a310 from '../../assets/a3/a3-10.png';
import ImageWrapper from '../../components/ImageWrapper';

function Assignment3() {
    return (
        <PageWrapper>
            <Heading>Assignment 3: "Information Design"</Heading>
            <div style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 20 March 2022</div>
            <div style={{ height: 150, width: 1 }} />

            <Normal>{intro1}</Normal>
            <ParaBreak />
            <Normal>{intro2}</Normal>
            <ParaBreak />
            <Normal>{intro3}</Normal>
            <ul style={{ lineHeight: '25px' }}>
                <li>
                    <span style={{ fontWeight: 'bold' }}>Storytelling</span>: as I wanted to take
                    the audience through a journey with a defined flow.
                </li>
                <li>
                    <span style={{ fontWeight: 'bold' }}>Structure</span>: through a well defined
                    format for the various sections of the infographic.
                </li>
                <li>
                    <span style={{ fontWeight: 'bold' }}>Intrigue and engagement</span>: by inducing
                    a sense of curiosity and enjoyment in the viewer.
                </li>
                <li>
                    <span style={{ fontWeight: 'bold' }}>Aesthetics</span>: through good and
                    consistent visuals that make it easy to follow.
                </li>
            </ul>
            <ParaBreak />

            <StickyBox topic="Brainstorming">
                <Normal>{brain1}</Normal>
                <ParaBreak />
                <Normal>{brain2}</Normal>
                <ParaBreak />
                <Normal>{brain3}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a31}
                    caption={'Sketching different overarching ideas to represent a keyboard'}
                />
                <Normal>{brain4}</Normal>
                <ImageWrapper
                    src={a32}
                    caption={'Color scheme (with main color palette on the right)'}
                />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Process">
                <Normal>{proc1}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a33}
                    caption={'Tracing various assets from hand-drawn sketches (squashed the drawings to adjust the angle)'}
                />
                <Normal>{proc2}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a34}
                    caption={'Abstracting assets further'}
                />
                <Normal>{proc3}</Normal>
                <ParaBreak />
                <Normal>{proc4}</Normal>
                <ParaBreak />
                <Normal>{proc5}</Normal>
                <ul style={{ lineHeight: '25px' }}>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Roboto</span>: high-tech, structured,
                        organized, reduced, oblique.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Lato</span>: sleek, modern, artful,
                        approachable warmth.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Helvetica</span>: modern, mainstream,
                        readable, contemporary.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Futura</span>: futuristic, sleek,
                        unique, geometric, Bauhaus.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Noto Sans</span>: readable, reduced,
                        approachable.
                    </li>
                </ul>
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Critique">
                <Normal>{crit1}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a35}
                    caption={'Font size adjustments (with 8 pt being the sweet spot)'}
                />
                <Normal>{crit2}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a36}
                    caption={'Section heading rectangular color changes from orange to blue (new on top, old below)'}
                />
                <Normal>{crit3}</Normal>
                <ParaBreak />
                <Normal>{crit4}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a37}
                    caption={'Gestalt grouping of sub-sections with rectangles and adding subtle arrows to the headers'}
                />
                <Normal>{crit5}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Other changes after critique">
                <Normal>{other1}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a38}
                    caption={'Atmospheric items: screwdriver, switches lying around'}
                />
                <Normal>{other2}</Normal>
                <ParaBreak />
                <ImageWrapper
                    src={a310}
                    caption={'Shaded graph on the left, and original graphs on the middle and right'}
                />
                <ImageWrapper
                    src={a39}
                    caption={'How the shaded graphs were made'}
                />
                <ParaBreak />
            </StickyBox>

            <StickyBox topic="Reflection">
                <Normal>{refl1}</Normal>
                <ParaBreak />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c' }}>{refl2}</Normal>
                <ParaBreak />
                <ParaBreak />
            </StickyBox>
        </PageWrapper>
    );
}

export default Assignment3;
