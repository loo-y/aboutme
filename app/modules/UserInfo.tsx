import userInfo from '../api/mockinfo/userInfo'
import { map as _map, isEmpty as _isEmpty } from 'lodash'
import FallbackImage from '../components/FallbackImage'
import SocialInteractText from '../components/SocialInteractText'
// import dynamic from 'next/dynamic';
// const FallbackImage = dynamic(() => import('../components/FallbackImage'), { ssr: false });

const UserInfo = () => {
    const { data } = userInfo || {}
    const { basicInfo, contactInfo, socials, languages, hobbies } = data || {}
    return (
        <div className="relative userinfo-module ">
            <div className="min-w-[11rem] w-full h-96 p-6 left-0 top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
                <BasicInfoBlock basicInfo={basicInfo} />
                <div className="w-full h-px relative">
                    <div className="h-px w-full left-0 top-0 absolute bg-slate-200" />
                </div>
                <ContactInfoBlock contactInfo={contactInfo} />
                {_isEmpty(socials) ? null : (
                    <>
                        <div className="w-full h-px relative">
                            <div className="h-px w-full left-0 top-0 absolute bg-slate-200" />
                        </div>
                        <SocialsBlock socials={socials} />
                    </>
                )}
                {_isEmpty(languages) ? null : (
                    <>
                        <div className="w-full h-px relative">
                            <div className="h-px w-full left-0 top-0 absolute bg-slate-200" />
                        </div>
                        <LanguagesBlock languages={languages} />
                    </>
                )}
                {_isEmpty(hobbies) ? null : (
                    <>
                        <div className="w-full h-px relative">
                            <div className="h-px w-full left-0 top-0 absolute bg-slate-200" />
                        </div>
                        <HobbiesInterestsBlock hobbies={hobbies} />
                    </>
                )}
            </div>
        </div>
    )
}

export default UserInfo

const BasicInfoBlock = ({ basicInfo }: { basicInfo: typeof userInfo.data.basicInfo }) => {
    const { bio, name, career, snapshot, avatar } = basicInfo || {}
    return (
        <div className="userinfo-module basicinfo-block mb-4">
            <div className="name-and-pic self-stretch  min-h-[6rem] flex-col justify-center items-start gap-2 flex">
                {avatar ? <img className=" w-[6rem] h-[6rem] rounded-full" src={avatar} /> : null}
                {/* <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" /> */}
                <div className="flex-col justify-center items-start gap-3 flex mt-1">
                    <div className="self-stretch min-h-[2.5rem] flex-col justify-start items-start gap-1 flex after:clear-both">
                        <div className="self-stretch text-slate-800 text-2xl font-medium leading-tight">{name}</div>
                        <div className="self-stretch text-violet-500 text-sm font-medium leading-none tracking-tight mt-2">
                            {career}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-1 self-stretch h-8 flex-col justify-start items-start gap-0.5 flex ">
                <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                    <div className="w-2.5 h-2.5 relative">
                        <img src="./misc/double_quotes_l.svg" />
                    </div>
                    <div className="text-slate-600 text-xs font-medium leading-3 tracking-tight break-all whitespace-break-spaces">
                        {bio}
                    </div>
                    <div className="w-2.5 self-stretch px-0.5 py-0.5 flex-col justify-end items-center inline-flex relative -left-[2px]">
                        <img src="./misc/double_quotes_r.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContactInfoBlock = ({ contactInfo }: { contactInfo: typeof userInfo.data.contactInfo }) => {
    const { countryCode } = contactInfo || {}
    let contactList: { type: string; title: string; value: string }[] = []
    const displayTypes: (keyof typeof contactInfo)[] = ['email', 'website', 'phone', 'city']
    _map(displayTypes, type => {
        let value = contactInfo[type]
        if (type == 'phone' && countryCode) {
            value = `(+${countryCode}) ${value}`
        }
        if (value) {
            contactList.push({
                type,
                title: upperFirstLetter(type),
                value,
            })
        }
    })
    return (
        <>
            <div className="contactinfo-block my-4 self-stretch flex-col justify-start items-start gap-3 flex">
                {_map(contactList, (contact, contactIndex) => {
                    const { title, value, type } = contact || {}
                    return (
                        <div
                            className="self-stretch justify-start items-center gap-2 inline-flex mb-4 last:mb-0"
                            key={`userinfo_contact_${contactIndex}`}
                        >
                            <div className="w-6 h-6 relative rounded-full bg-slate-200 min-w-[1.5rem]">
                                <div className="w-5 h-5 left-[0.125rem] -top-[0.125rem] absolute ">
                                    <FallbackImage src={`./misc/${type}.svg`} className="inline " />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-slate-500 text-xs font-normal leading-3 tracking-tight">
                                    {title}
                                </div>
                                <div className="self-stretch text-slate-600 text-xs font-medium leading-3 mt-1  break-all">
                                    {value}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const SocialsBlock = ({ socials }: { socials: typeof userInfo.data.socials }) => {
    if (_isEmpty(socials)) return null
    return (
        <div className="socials-block">
            <div className="self-stretch flex-col justify-start items-start gap-3 flex my-4">
                <div className="self-stretch text-slate-500 text-lg font-bold  leading-3 tracking-tight mb-2">
                    Socials
                </div>
                {_map(socials, (sItem, sIndex) => {
                    const { social, account, link, qrcode } = sItem || {}
                    return (
                        <div
                            key={`userinfo_languages_${sIndex}`}
                            className="self-stretch justify-start items-center gap-1 inline-flex mb-4 last:mb-0"
                        >
                            <div className="w-6 h-6 bg-slate-300 bg-opacity-20 rounded-full relative">
                                <div className="w-5 h-5 absolute left-[0.125rem] top-[0.125rem]">
                                    <FallbackImage src={`./commonicons/${social.toLowerCase()}.svg`} />
                                </div>
                            </div>
                            <div className="ml-1 grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-slate-500 text-xs font-normal leading-3 tracking-tight">
                                    {upperFirstLetter(social)}
                                </div>
                                <div className={`self-stretch text-slate-600 text-xs font-medium leading-3`}>
                                    {link || qrcode ? (
                                        <SocialInteractText text={account} socialItem={sItem} />
                                    ) : (
                                        <>{account}</>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const LanguagesBlock = ({ languages }: { languages: typeof userInfo.data.languages }) => {
    if (_isEmpty(languages)) return null
    return (
        <div className="languages-block">
            <div className="self-stretch flex-col justify-start items-start gap-3 flex my-4">
                <div className="self-stretch text-slate-500 text-lg font-bold leading-3 tracking-tight mb-2">
                    Languages
                </div>
                {_map(languages, (lItem, lIndex) => {
                    const { language, level } = lItem || {}
                    return (
                        <div
                            key={`userinfo_languages_${lIndex}`}
                            className="self-stretch justify-start items-center gap-1 inline-flex mb-4 last:mb-0"
                        >
                            <div className="w-5 h-5 relative">
                                <div className="w-5 h-5 absolute ">
                                    <FallbackImage src={`./languages/${language.toLowerCase()}.svg`} />
                                </div>
                            </div>
                            <div className="ml-1 grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-slate-600 text-xs font-medium leading-3">
                                    {upperFirstLetter(language)}
                                </div>
                                {level ? (
                                    <div className="self-stretch text-slate-500 text-xs font-normal leading-3 tracking-tight">
                                        {upperFirstLetter(level)}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const HobbiesInterestsBlock = ({ hobbies }: { hobbies: typeof userInfo.data.hobbies }) => {
    if (_isEmpty(hobbies)) return null
    return (
        <div className="languages-block">
            <div className="self-stretch flex-col justify-start items-start gap-3 flex my-4">
                <div className="self-stretch text-slate-500 text-lg font-bold leading-3 tracking-tight mb-2">
                    Hobbies & Interests
                </div>
                {_map(hobbies, (hItem, hIndex) => {
                    const { hobby, type } = hItem || {}
                    return (
                        <div
                            key={`userinfo_languages_${hIndex}`}
                            className="self-stretch justify-start items-center gap-1 inline-flex mb-4 last:mb-0"
                        >
                            <div className="w-5 h-5 relative">
                                <div className="w-5 h-5 absolute ">
                                    <FallbackImage src={`./commonicons/${type.toLowerCase()}.svg`} />
                                </div>
                            </div>
                            <div className="ml-[0.2rem] grow shrink basis-0 flex-col justify-start items-start">
                                <div className="self-stretch text-slate-600 text-xs font-medium leading-3 relative top-[1px]">
                                    {upperFirstLetter(hobby)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
// ********** helper **********
const upperFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}
