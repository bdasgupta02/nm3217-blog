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
            <Heading>Welcome to my blog for NM3217!</Heading>
            <div style={{ height: 100, width: 1 }} />

            <Normal style={{ fontWeight: 'bold' }}>Assignments</Normal>
            <Tile
                title={'Assignment 1'}
                subtitle="Stripping Down!"
                date="6 Match 2022"
                onClick={() => goToPage('/assignment/1')}
            />
        </PageWrapper>
    );
}

export default Home;