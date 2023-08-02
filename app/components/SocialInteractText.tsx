'use client'
import { useState } from 'react'
import QRCodePopover from './QRCodePopover'

interface SocialInteractTextProps {
    text: string
    socialItem: { [index: string]: any }
}

const SocialInteractText: React.FC<SocialInteractTextProps> = ({ text, socialItem }) => {
    const { link, qrcode } = socialItem || {}
    const [isOpen, sestIsOpen] = useState(false)
    const handleSocialClick = (socialItem: { [index: string]: any }) => {
        if (!link) return
        window.open(link, '_blank')
    }
    const handleSocialHover = (socialItem: { [index: string]: any }) => {
        if (!qrcode) return
        sestIsOpen(true)
    }

    return (
        <span
            className="cursor-pointer"
            onMouseEnter={() => {
                handleSocialHover(socialItem)
            }}
            onMouseLeave={() => {
                sestIsOpen(false)
            }}
            onClick={() => {
                handleSocialClick(socialItem)
            }}
        >
            {text}
            <QRCodePopover isOpen={isOpen} qrCodeImg={qrcode} />
        </span>
    )
}

export default SocialInteractText
