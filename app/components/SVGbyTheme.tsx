'use client'
import { ThemeContext } from '@/app/theme-provider'
import { useContext, useEffect, useState } from 'react'
import FallbackImage from './FallbackImage'
interface SVGbyThemeProps {
    svg: string
    className?: string
    width?: number
    height?: number
    isReserve?: boolean
}

const SVGbyTheme = ({ svg, className, width, height, isReserve }: SVGbyThemeProps) => {
    const context = useContext(ThemeContext)
    const { dark } = context || {}
    const [svgUrl, setSvgUrl] = useState<string>('')
    useEffect(() => {
        if (svg) {
            setSvgUrl((isReserve ? !dark : dark) ? replaceLightOrAppend(svg) : svg)
        }
    }, [svg, dark])
    if (!svgUrl) return null
    return <FallbackImage src={svgUrl} fallbacks={[svg]} className={className || ''} width={width} height={height} />
}

export default SVGbyTheme

// *********** helper ***********

const regex = /([\w\W]+)(?=\.[^.]+$)/
const light = /light/
const replacement = 'dark'
const replaceLightOrAppend = (svgname: string) => {
    if (!svgname) return svgname
    if (light.test(svgname)) return svgname.replace(light, replacement)
    if (regex.test(svgname)) return svgname.replace(/([\w\W]+)(?=\.[^.]+$)/, '$&-' + replacement)
    return svgname
}
