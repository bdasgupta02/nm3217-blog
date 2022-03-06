import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import StickyBox from '../../components/StickyBox';
import { Heading, Normal } from '../../components/TextComponents';
import './assignment1.css';

import {
    conclusion,
    intro1,
    intro2,
    stage01,
    stage02,
    stage11,
    stage12,
    stage13,
    stage21,
    stage22,
    stage23,
    stage31,
    stage32,
    stage33,
    stage41,
    stage42,
    stage43,
    stage51,
    stage52,
    stage53,
    stage54,
    stage5c,
} from './texts';

// Images
import a1stage0 from '../../assets/a1-stage0.png';
import a1stage1 from '../../assets/a1-stage1.svg';
import a1stage2 from '../../assets/a1-stage2.svg';
import a1stage3 from '../../assets/a1-stage3.svg';
import a1stage4 from '../../assets/a1-stage4.svg';
import a1stage5 from '../../assets/a1-stage5.svg';

import a1stage01 from '../../assets/a1-stage0-1-extraction.png';
import a1stage02 from '../../assets/a1-stage1-2-grey.png';

import a1stage11 from '../../assets/a1-stage1-1-dark.png';

import a1stage21 from '../../assets/a1-stage2-3-removing.png';
import a1stage2c from '../../assets/a1-stage2-critique.png';

import a1stage31 from '../../assets/a1-stage3-1-symmetry.png';
import a1stage32 from '../../assets/a1-stage3-2-lines.png';

import a1stage41 from '../../assets/a1-stage4-symmetry.png';

import a1stage51 from '../../assets/a1-stage5-1-progress.png';
import a1stage5fib from '../../assets/a1-stage5-2-fib.png';
import a1stage5c from '../../assets/a1-stage5-critique.png';


const ParaBreak = () => {
    return <div style={{ height: '20px', width: '1px' }} />;
};

function Assignment1() {
    return (
        <PageWrapper>
            <Heading>Assignment 1: "Stripping Down!"</Heading>
            <div style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 6 March 2022</div>
            <div style={{ height: 150, width: 1 }} />

            <Normal>{intro1}</Normal>
            <ParaBreak />
            <Normal>{intro2}</Normal>
            <div style={{ height: 30, width: 1 }} />

            <StickyBox topic="Stage 0: original image" image={a1stage0}>
                <Normal>{stage01}</Normal>
                <ParaBreak />
                <Normal>{stage02}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage01} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Extracting the subject
                </Normal>
            </StickyBox>
            <div style={{ height: 30, width: 1 }} />

            <StickyBox topic="Stage 1: as much detail as possible" image={a1stage1}>
                <Normal>{stage13}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage02} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Convering the image to greyscale to make it easier to trace in black and white
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage11}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage11} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Tracing the different shades step by step
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage12}</Normal>
            </StickyBox>
            <div style={{ height: 30, width: 1 }} />

            <StickyBox topic="Stage 2: first layer of abstraction" image={a1stage2}>
                <Normal>{stage21}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage21} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Removing details via simplification and shades
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage22}</Normal>
                <ParaBreak />
                <Normal>{stage23}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage2c} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Making stage 2 (in middle) closer to stage 3 (right), using the input from
                    critique
                </Normal>
            </StickyBox>
            <div style={{ height: 30, width: 1 }} />

            <StickyBox topic="Stage 3: ah, yes - symmetry!" image={a1stage3}>
                <Normal>{stage31}</Normal>
                <ParaBreak />
                <Normal>{stage32}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage31} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Adding symmetry through a box
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage33}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage32} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Reducing the fidelity of the paths to form clearer lines
                </Normal>
            </StickyBox>
            <div style={{ height: 30, width: 1 }} />

            <StickyBox topic="Stage 4: simplification" image={a1stage4}>
                <Normal>{stage41}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage41} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Taking symmetry further
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage42}</Normal>
                <Normal>{stage43}</Normal>
            </StickyBox>
            <div style={{ height: 30, width: 1 }} />

            <StickyBox topic="Stage 5: symbol" image={a1stage5}>
                <Normal>{stage51}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage51} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Arriving at stage 5
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage52}</Normal>
                <ParaBreak />
                <Normal>{stage53}</Normal>
                <ParaBreak />
                <Normal>{stage54}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage5fib} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Fibonacci ratio of the ribbon
                </Normal>
                <ParaBreak />
                <ParaBreak />
                <Normal>{stage5c}</Normal>
                <ParaBreak />
                <img style={{ width: '100%' }} src={a1stage5c} alt="Img" />
                <Normal style={{ fontStyle: 'italic', color: '#9c9c9c', textAlign: 'center' }}>
                    Old symbol (left) and revised symbol (right)
                </Normal>
            </StickyBox>

            <StickyBox topic="What I learnt" image={''}>
                <Normal>{conclusion}</Normal>
            </StickyBox>

            <div style={{ height: 50, width: 1 }} />
            <Normal style={{ color: '#9c9c9c' }}>
                {
                    "Note: I coded this blog from scratch for some extra functionality and the looks I wanted, if it's buggy or looks incomplete due to some technical issues please let me know at bikramjit@u.nus.edu 😅"
                }
            </Normal>
        </PageWrapper>
    );
}

export default Assignment1;
