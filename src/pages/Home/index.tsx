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
            <div style={{ height: '100px', width: '1px' }} />

            <Normal style={{ fontWeight: 'bold', fontSize: '20px' }}>Final project</Normal>
            <Tile
                title={'Final project'}
                subtitle="My brand"
                date="15 April 2022"
                onClick={() => goToPage('/final_project')}
            />

            <Normal style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '50px' }}>
                Assignments
            </Normal>
            <Tile
                title={'Assignment 1'}
                subtitle="Stripping down!"
                date="6 March 2022"
                onClick={() => goToPage('/assignment/1')}
            />
            <Tile
                title={'Assignment 2'}
                subtitle="Storytime!"
                date="12 March 2022"
                onClick={() => goToPage('/assignment/2')}
            />
            <Tile
                title={'Assignment 3'}
                subtitle="Information design"
                date="20 March 2022"
                onClick={() => goToPage('/assignment/3')}
            />

            <Normal style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '50px' }}>
                In-lecture assignments
            </Normal>
            <Tile
                title={'Exercise A'}
                subtitle="An object that makes me creative"
                date="15 January 2022"
                onClick={() => goToPage('/le/1')}
            />
            <Tile
                title={'Exercise B'}
                subtitle="Constructive criticism model"
                date="25 January 2022"
                onClick={() => goToPage('/le/2')}
            />
            <Tile
                title={'Exercise C'}
                subtitle="Signs and symbols of Heinz"
                date="6 February 2022"
                onClick={() => goToPage('/le/3')}
            />
            <Tile
                title={'Exercise D'}
                subtitle="Composing compositions"
                date="12 February 2022"
                onClick={() => goToPage('/le/4')}
            />
            <Tile
                title={'Exercise E'}
                subtitle="An object that makes me creative"
                date="20 February 2022"
                onClick={() => goToPage('/le/5')}
            />
            <Tile
                title={'Exercise F'}
                subtitle="Create your own color scheme"
                date="6 March 2022"
                onClick={() => goToPage('/le/6')}
            />
            <Tile
                title={'Exercise G'}
                subtitle="Patterns using elements of design"
                date="12 March 2022"
                onClick={() => goToPage('/le/7')}
            />
        </PageWrapper>
    );
}

export default Home;
