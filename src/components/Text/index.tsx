import React from 'react'

/**
 * TODO:
 * - fill all type styles (implement as styles are needed)
 */

enum TEXT_TYPE {
    TITLE = 'Title',
    SUBTITLE = 'Subtitle',
    NORMAL = 'Normal',
    SMALL = 'Small',
    SMALL_LIGHT = 'SmallLight',
    FORM_LABEL = 'FormLabel',
    NAVBAR = 'Navbar',
    NAVBAR_SUBTITLE = 'Navbar Subtitle'
}

type Props = {
    type: TEXT_TYPE | string,
    forceColor?: string,
    isInline?: boolean,
    text?: string,
}

const defaultProps: Props = {
    type: TEXT_TYPE.NORMAL,
    text: ''
}

function Text(props: Props) {
    const { type, forceColor, text } = { ...defaultProps, ...props }

    // finish all styles
    const navbarStyles = {
        width: 'fit-content',
        display: 'inline',
        fontSize: '14px',
        marginLeft: '10px',
    }

    const navbarSubStyles = {
        letterSpacing: '2px',
        width: 'fit-content',
        marginLeft: '8px',
        fontWeight: 'bold',
        fontSize: '11px',
        color: forceColor
    }

    const textStyles = () => {
        switch (type) {
            case TEXT_TYPE.NAVBAR:
                return navbarStyles
            case TEXT_TYPE.NAVBAR_SUBTITLE:
                return navbarSubStyles
            default:
                return {}
        }
    }

    return (
        <div style={textStyles()}>
            {text}
        </div>
    )
}

export default Text
