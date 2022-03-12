import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Heading, Normal } from '../../components/TextComponents';
import { useNavigate } from 'react-router-dom';
import Tile from './Tile';

function Home() {
    const navigate = useNavigate();
    const goToPage = (page: string) => {
        navigate(page);
    };

    return (
        <PageWrapper>
            <Heading>The technical designer.</Heading>
            <Normal style={{ fontSize: 16, color: '#9c9c9c' }}>My blog for NM3217</Normal>
            <div style={{ height: 100, width: 1 }} />

            <Normal style={{ fontWeight: 'bold', fontSize: '20px' }}>Assignments</Normal>
            <Tile
                title={'Assignment 1'}
                subtitle="Stripping Down!"
                date="6 March 2022"
                onClick={() => goToPage('/assignment/1')}
            />
            <Tile
                title={'Assignment 2'}
                subtitle="Storytime!"
                date="12 March 2022"
                onClick={() => goToPage('/assignment/2')}
            />
        </PageWrapper>
    );
}

export default Home;
