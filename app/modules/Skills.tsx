'use client'
import { useEffect, useState, Fragment } from 'react'
import skills from '../api/mockinfo/skills'
import { map as _map, isEmpty as _isEmpty } from 'lodash'
import SVGbyTheme from '../components/SVGbyTheme'

const Skills = () => {
    const { data, title } = skills || {}
    const [categorys, setCategorys] = useState([])
    const [randomShowChunked, setRandomShowChunked] = useState<any[]>([])
    useEffect(() => {
        const sortedSkills = sortSkills({ skillInfo: data })
        setCategorys(sortedSkills.categorys)
        if (sortedSkills.randomShowChunked) setRandomShowChunked(sortedSkills.randomShowChunked)
    }, [data])

    if (_isEmpty(categorys)) return null
    return (
        <div className="skills-module">
            <div className="p-4 w-full flex-col justify-start items-start gap-4 inline-flex  min-w-[35rem]">
                <div className="text-center text-slate-800 text-2xl font-medium leading-none tracking-tight dark:text-zinc-200">
                    {title}
                </div>

                <div className="self-stretch justify-start items-start mt-4 inline-flex">
                    {_map(categorys, (c, c_index) => {
                        const { category, style, logo } = c
                        return (
                            <div
                                key={`skill_${c_index}`}
                                className="h-4 pb-1 rounded-tl relative justify-start items-start gap-1 inline-flex mr-8"
                            >
                                <div className="w-5 h-5 relative -top-1 bg-violet-100 rounded-full dark:bg-stone-200">
                                    <div className="w-3 h-3 left-1 top-1 absolute">
                                        <img src={logo} />
                                    </div>
                                </div>
                                <div className={`text-${style}-500 text-xl font-medium leading-3 ml-1`}>{category}</div>
                            </div>
                        )
                    })}
                </div>
                {_map(randomShowChunked, (rcl, rcl_index) => {
                    const { list: chunkedList, splitOrCombine } = rcl || {}
                    if (splitOrCombine) {
                        return (
                            <div
                                key={`skill_row_${rcl_index}_split`}
                                className="self-stretch grow shrink basis-0 justify-start items-start gap-2 inline-flex"
                            >
                                {_map(chunkedList, (cl, cl_index) => {
                                    const { value, style } = cl || {}
                                    if (_isEmpty(value))
                                        return (
                                            <div
                                                key={`skill_row_${rcl_index}_col_${cl_index}_split`}
                                                className="grow shrink basis-0 self-stretch px-2 py-4 rounded-tl flex-col justify-center items-start gap-0.5 inline-flex"
                                            ></div>
                                        )
                                    return (
                                        <div
                                            key={`skill_row_${rcl_index}_col_${cl_index}_split`}
                                            className="cursor-grab active:cursor-grabbing grow shrink basis-0 self-stretch px-2 py-4 bg-slate-50 hover:shadow-slate-800/30 shadow-lg hover:dark:shadow-slate-600/60 dark:shadow-xl rounded-tl rounded-br rounded-2xl flex-col justify-center items-start gap-0.5 inline-flex dark:bg-slate-900"
                                        >
                                            <div
                                                className={`self-stretch text-center text-${style}-500 text-sm font-medium leading-3`}
                                            >
                                                <SVGbyTheme
                                                    svg={`./commonicons/${value.toLowerCase()}.svg`}
                                                    isReserve={true}
                                                    className={'inline w-6 h-6 mr-2 relative bottom-[2px]'}
                                                />

                                                {value}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }

                    return (
                        <div
                            key={`skill_row_${rcl_index}_combine`}
                            className="self-stretch grow shrink basis-0 p-2 bg-slate-50 justify-center items-center gap-1 inline-flex dark:bg-slate-900"
                        >
                            {_map(chunkedList, (cl, cl_index) => {
                                const { value, style } = cl || {}
                                return (
                                    <Fragment key={`skill_row_${rcl_index}_col_${cl_index}_combine`}>
                                        <div
                                            className={`grow shrink basis-0 px-2 py-10 text-center text-${style}-500 text-sm font-medium leading-3`}
                                        >
                                            <SVGbyTheme
                                                svg={`./commonicons/${value.toLowerCase()}.svg`}
                                                isReserve={true}
                                                className={'inline w-6 h-6 mr-2 relative bottom-[2px]'}
                                            />
                                            {value}
                                        </div>
                                        {Number(cl_index) >= chunkedList.length - 1 ? null : (
                                            <div className="w-px h-6 relative">
                                                <div className="w-px h-6 left-0 top-0 absolute border border-slate-200" />
                                            </div>
                                        )}
                                    </Fragment>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills

// ********** helper **********
interface SortSkillsProps {
    skillInfo: (typeof skills)['data']
}

function sortSkills({ skillInfo }: SortSkillsProps) {
    let categorys: any = [],
        list: { value: string; category: string; style: string }[] = []
    let chunkedList: (typeof list)[] = [],
        randomShowChunked: { list: typeof list; splitOrCombine: boolean }[] = []
    if (_isEmpty(skillInfo))
        return {
            categorys,
            randomShowChunked,
        }

    _map(skillInfo, item => {
        const { category, logo, style, list: categoryList } = item || {}
        categorys.push({
            category,
            logo,
            style,
        })
        list = list.concat(
            _map(categoryList, subItem => {
                return {
                    value: subItem,
                    category,
                    style,
                }
            })
        )
    })

    chunkedList = randomChunk(list, [5])
    _map(chunkedList, cl => {
        randomShowChunked.push({
            list: cl,
            splitOrCombine: true, // Math.random() > 0.5,
        })
    })
    return {
        categorys,
        randomShowChunked,
    }
}

function randomChunk<T>(array: T[], chunkSize?: number[]): T[][] {
    let result: T[][] = []
    let index = 0,
        randomIndex,
        size
    chunkSize = chunkSize || [1, 2, 3]
    while (index < array.length) {
        randomIndex = Math.floor(Math.random() * chunkSize.length)
        size = chunkSize[randomIndex]
        result.push(array.slice(index, index + size))
        index += size
    }
    const resultLength = result.length
    // 当最后一个太小时，拿倒数第二个补一位
    if (!chunkSize.includes(result[resultLength - 1].length)) {
        // @ts-ignore
        result[resultLength - 1] = result[resultLength - 1].concat([undefined])
    }
    return result
}
