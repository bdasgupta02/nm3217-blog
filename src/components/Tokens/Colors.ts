
export const TextColors = {
    PRIMARY: '#4A4A4A',
    LIGHT: '#979797',
    PINK: '#E2627C',
    PURPLE: '#B25E93',
    VIOLET: '#775D92',
    BLUE: '#45567B',
    YELLOW: '#D38D4C',
    GREEN: '#34745D',
    NAVBAR: '#666666'
}

export const percentageToHex = (percentage : number) => {
    const decimal = Math.round((percentage * 255) / 100)
    if (percentage < 7) {
        return "0" + decimal.toString(16).toUpperCase()
    } else {
        return decimal.toString(16).toUpperCase()
    }
}