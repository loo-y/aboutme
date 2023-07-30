'use client'
interface SocialInteractTextProps {
    text: string
    socialItem: { [index: string]: any }
}

const SocialInteractText: React.FC<SocialInteractTextProps> = ({ text, socialItem }) => {
    const handleSocialClick = (socialItem: { [index: string]: any }) => {
        const { link } = socialItem || {}
        if (!link) return
        window.open(link, '_blank')
    }
    const handleSocialHover = (socialItem: { [index: string]: any }) => {
        const { qrcode } = socialItem || {}
        if (!qrcode) return
    }

    return (
        <span
            className="cursor-pointer"
            onMouseEnter={() => {
                handleSocialHover(socialItem)
            }}
            onClick={() => {
                handleSocialClick(socialItem)
            }}
        >
            {text}
        </span>
    )
}

export default SocialInteractText
