import { useEffect, useState, Fragment } from 'react'
import tools from '../api/mockinfo/tools'
import { map as _map, isEmpty as _isEmpty, chunk as _chunk } from 'lodash'
import FallbackImage from '../components/FallbackImage'
import SVGbyTheme from '../components/SVGbyTheme'

const Tools = () => {
    const { data, title } = tools || {}
    let chunkedTools = chunkFill(data, 4)
    const imagePath = `./commonicons/`
    if (_isEmpty(data)) return null
    return (
        <div className="tools-module">
            <div className="p-4 w-full flex-col justify-start  items-start gap-4 inline-flex  min-w-[35rem]">
                <div className="text-center text-slate-800 text-2xl font-medium leading-none tracking-tight dark:text-zinc-200">
                    {title}
                </div>
                <div className="self-stretch justify-start items-start mt-2 flex-col gap-2 flex">
                    {_map(chunkedTools, (rowTools, rowIndex) => {
                        return (
                            <div
                                className="self-stretch grow shrink basis-0 justify-start items-start gap-2 inline-flex"
                                key={`tools_${rowIndex}`}
                            >
                                {_map(rowTools, (tool, toolIndex) => {
                                    const { title, name, desc } = tool || {}
                                    if (!title)
                                        return (
                                            <div
                                                key={`tools_${rowIndex}_${toolIndex}`}
                                                className="flex-grow  justify-center items-center gap-2 flex flex-col p-4 w-1/4"
                                            ></div>
                                        )
                                    return (
                                        <div
                                            key={`tools_${rowIndex}_${toolIndex}`}
                                            className="flex-grow  bg-slate-100 justify-center items-center gap-2 flex flex-col px-2 py-6 w-1/4 dark:bg-slate-700"
                                        >
                                            <div className="relative flex h-16 w-16">
                                                <SVGbyTheme
                                                    svg={`${imagePath}${name}.svg`}
                                                    isReserve={true}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="flex-col justify-center items-center gap-px flex">
                                                <div className="text-slate-800 text-xs font-medium leading-3 dark:text-gray-200">
                                                    {title}
                                                </div>
                                                {desc ? (
                                                    <div className="text-slate-500 dark:text-gray-400 text-xs font-normal tracking-tight mt-1 justify-center items-center text-center whitespace-pre-line line-clamp-1">
                                                        {desc}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tools

// ********** helper **********

const chunkFill = (toolList: typeof tools.data, chunkNumber: number) => {
    if (_isEmpty(toolList)) return [[]]
    let chunkedTools = _chunk(toolList || [], chunkNumber)
    const length = chunkedTools.length
    let chunkedLast = chunkedTools[length - 1]
    if (chunkedLast.length < chunkNumber) {
        chunkedTools[length - 1] = chunkedLast.concat(Array(chunkNumber - length - 1).fill(undefined))
    }
    return chunkedTools
}
