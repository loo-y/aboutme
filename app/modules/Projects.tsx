import projects from '../api/mockinfo/projects'
import { map as _map, isEmpty as _isEmpty } from 'lodash'
import { Fragment } from 'react'
import AlphabetSvg, { UPPERLOWER } from '../components/AlphabetSvg'

const Projects = () => {
    const { data, title } = projects || {}
    return (
        <div className="projects-module">
            <div className="p-4 w-full flex-col  justify-start items-start gap-4 inline-flex  min-w-[35rem]">
                <div className="text-center text-slate-800 text-2xl font-medium leading-none tracking-tight dark:text-zinc-200">
                    {title}
                </div>
                <div className="self-stretch flex-col justify-start items-start pt-2 flex pb-2 relative">
                    {_map(data, (project, pIndex) => {
                        const { name, tags, descriptions } = project || {}
                        const firstChar = getFirstCharEnglish(name, 'x')
                        const tagsText = _isEmpty(tags) ? undefined : tags.join(` · `)
                        return (
                            <div
                                className="self-stretch justify-center items-start gap-2 flex-col   mb-6 last:mb-0"
                                key={`projects_${pIndex}`}
                            >
                                <div className="top-info grow shrink basis-0 text-lg font-medium self-stretch mb-0.5 justify-center items-end gap-1 flex align-text-bottom">
                                    <div className=" text-slate-700 tracking-tight relative h-5 w-[50rem] dark:text-stone-200">
                                        <div className="absolute left-0 -top-[0.125rem]">
                                            <div className="left-0 -top-[2px] inline-block mr-2 justify-items-center rounded-sm relative">
                                                <AlphabetSvg
                                                    text={name}
                                                    upperOrLower={UPPERLOWER.upper}
                                                    className="w-5 h-5 inline"
                                                    asImg={true}
                                                />
                                            </div>
                                            {name || ''}
                                        </div>
                                    </div>
                                    <div className="pl-4 grow shrink basis-0 tracking-tight">
                                        <div className="float-right text-sm">
                                            <div className="text-blue-500 text-xs font-medium leading-3 cursor-pointer w-20 text-right">
                                                Link
                                                <img src="./misc/arrow-tr.svg" className="w-3 h-3 inline" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col h-[2px] bg-slate-300 w-full mt-1 mb-2" />
                                <div className="flex-col text-xs">
                                    {tagsText ? (
                                        <div className="tags text-slate-400  font-medium leading-3 dark:text-gray-400">
                                            {tagsText}
                                        </div>
                                    ) : null}
                                    {descriptions ? (
                                        <div className="desc text-slate-600 text-sm font-normal leading-1 mt-2 dark:text-gray-300">
                                            {_map(descriptions, (desc, descIndex) => {
                                                return (
                                                    <Fragment key={`projects_${pIndex}_desc_${descIndex}`}>
                                                        {desc}
                                                        <br />
                                                    </Fragment>
                                                )
                                            })}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects

// ********** helper **********

/**
 * get fisrt English char from string, and return the default value if it's not English
 * @param {string} text
 * @param {string} defaultValue - optional
 * @returns {string}
 */
const getFirstCharEnglish = (text: string, defaultValue?: string) => {
    defaultValue = defaultValue || 'x'
    if (/^[a-zA-Z]/.test(text)) {
        return text[0].toUpperCase()
    }
    return defaultValue.toUpperCase()
}
