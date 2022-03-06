import React, { useState } from 'react';
import { Normal } from '../../components/TextComponents';
import { useSpring, animated } from 'react-spring';

function Tile({
    title,
    subtitle,
    date,
    onClick,
}: {
    title: string;
    subtitle: string;
    date: string;
    onClick: Function;
}) {
    const [hovering, setHovering] = useState<boolean>(false);

    const shadowAnim = useSpring(hovering ? {
        boxShadow: '5px 8px 20px #c2c2c252'
    } : {
        boxShadow: '0px 0px 0px #c2c2c252'
    })

    return (
        <animated.div
            onClick={() => onClick()}
            style={{ backgroundColor: 'white', padding: '20px', marginTop: '10px', ...shadowAnim }}
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}>
            <Normal style={{ fontWeight: 'bold' }}>{title}</Normal>
            <Normal>{subtitle}</Normal>
            <div style={{ height: '10px', width: '1px' }} />
            <Normal style={{ color: '#b3b3b3' }}>{date}</Normal>
        </animated.div>
    );
}

export default Tile;
