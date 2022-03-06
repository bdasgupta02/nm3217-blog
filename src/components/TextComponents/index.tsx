import React from 'react';

export const Heading = ({ children }: any) => {
    return (
        <div style={{ fontSize: 35 }}>{children}</div>
    )
}

export const Normal = ({ children, style }: any ) => {
    return (
        <div style={{ fontSize: 16, color: 'black', ...style }}>{children}</div>
    )
}