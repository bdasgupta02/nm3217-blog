import React from 'react'
import { Box, Container } from '@mui/material'
import './pageWrapper.css'


/**
 * PageWrapper
 * - Wrap all your pages inside this component.
 * - Responsive and simple.
 * 
 * Alternatives
 * - Grid-component based system [not chosen due to shit responsiveness compared to this]
 */


type Props = {
    title?: string,
    subtitle?: string,
    children: React.ReactNode
}

const defaultProps: Props = {
    title: '',
    subtitle: '',
    children: <div></div>
}

const PageWrapper = (props: Props) => {
    const { title, children } = { ...defaultProps, ...props }

    return (
        <div id="PWOuter">
            <Container maxWidth="md">
                <Box minHeight="100vh" sx={{ paddingTop: '100px', paddingBottom: '100px' }}>
                    <div style={{ width: '100%' }}>
                        <div>{title}</div>
                    </div>
                    {children}
                </Box>
            </Container>
        </div>
    )
}

export default PageWrapper