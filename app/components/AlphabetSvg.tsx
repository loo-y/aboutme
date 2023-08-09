export const enum UPPERLOWER {
    upper = 'upper',
    lower = 'lower',
}
interface AlphabetSvgProps {
    text?: string
    upperOrLower?: UPPERLOWER
    asImg?: boolean

    className?: string
}

const defaultLetter = `X`

const AlphabetSvg = ({ text, upperOrLower, asImg, className }: AlphabetSvgProps) => {
    let letter = getFirstCharEnglish(text)
    if (upperOrLower == UPPERLOWER.lower) {
        letter = letter.toLowerCase()
    } else if ((upperOrLower = UPPERLOWER.upper)) {
        letter = letter.toUpperCase()
    }
    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
        <rect width="100%" height="100%" fill="#0074d9"/>
        <text x="128" y="228" font-size="280" font-weight="700" text-anchor="middle" fill="#fff">${letter}</text>
    </svg>`

    if (asImg) {
        return (
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                    "<?xml version='1.0' encoding='UTF-8'?>" + svgString
                )}`}
                className={className || ''}
            />
        )
    }

    return <svg dangerouslySetInnerHTML={{ __html: svgString }} className={`${className || ''}`} />
}

export default AlphabetSvg

// ********** helper **********

const getFirstCharEnglish = (text?: string, defaultValue?: string) => {
    defaultValue = defaultValue || defaultLetter
    if (text && /^[a-zA-Z]/.test(text)) {
        return text[0]
    }
    return defaultValue
}
