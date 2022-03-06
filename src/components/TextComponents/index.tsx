import React from 'react';

export const Heading = ({ children, style }: any) => {
    return (
        <div style={{ fontSize: '35px', ...style }}>{children}</div>
    )
}

export const Normal = ({ children, style }: any ) => {
    return (
        <div style={{ fontSize: 16, color: '#4A4A4A', ...style }}>{children}</div>
    )
}