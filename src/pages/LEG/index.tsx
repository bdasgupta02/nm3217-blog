import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import ImageWrapper from '../../components/ImageWrapper';
import gimg from '../../assets/le/g.png';
import { g1 } from './texts';

function LEG() {
    return (
        <PageWrapper>
            <Heading>Exercise G: Patterns using elements of design</Heading>
            <Normal style={{ color: '#9c9c9c' }}>Bikramjit Dasgupta | 12 March 2022</Normal>
            <div style={{ height: '150px', width: '1px' }} />

            <ImageWrapper src={gimg} caption="The pattern" />
            <Normal>{g1}</Normal>
        </PageWrapper>
    );
}

export default LEG;
