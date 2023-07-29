import NextImage from 'next/image'
import { useState, useEffect } from 'react'
import { isEmpty as _isEmpty } from 'lodash'

interface FallbackImageProps {
    src: string
    fallbacks?: string[]
    className?: string
    width?: number
    height?: number
}

const FallbackImage: React.FC<FallbackImageProps> = ({ src, fallbacks, className, width, height }) => {
    const [imageSrc, setImageSrc] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // 只在客户端渲染
            // @ts-ignore
            const img = new Image()
            img.onload = () => setImageSrc(img.src)
            img.onerror = () => {
                const nextSrc = fallbacks && !_isEmpty(fallbacks) && fallbacks.shift()
                if (nextSrc) {
                    img.src = nextSrc
                } else {
                    setImageSrc('')
                }
            }
            img.src = src
        }
    }, [src, fallbacks])

    return (
        <div>
            {imageSrc && (
                <NextImage
                    width={width || 100}
                    height={height || 100}
                    src={imageSrc}
                    className={className || ''}
                    alt="Fallback image"
                />
            )}
        </div>
    )
}

export default FallbackImage
