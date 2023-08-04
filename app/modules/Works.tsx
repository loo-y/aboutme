import works from '../api/mockinfo/works'
import { map as _map, isEmpty as _isEmpty, chunk as _chunk } from 'lodash'
import SVGbyTheme from '../components/SVGbyTheme'

const Works = () => {
    const { data, title } = works || {}
    const displayList = _isEmpty(data) ? [] : _chunk(data, 2)
    return (
        <div className="works-module">
            <div className="p-4 w-full flex-col  justify-start items-start gap-4 inline-flex  min-w-[35rem]">
                <div className="text-center text-slate-800 text-2xl font-medium leading-none tracking-tight dark:text-stone-200">
                    {title}
                </div>
                <div className="self-stretch flex-col justify-start items-start pt-2 flex pb-2 relative gap-[1rem]">
                    {_map(displayList, (displayRow, rowIndex) => {
                        if (displayRow.length == 1) {
                            const { title, banner, descriptions, link } = displayRow[0] || {}
                            return (
                                <div
                                    key={`works_rows_${rowIndex}`}
                                    className="self-stretch justify-start items-start gap-[1rem] w-full"
                                >
                                    <div className="grow shrink basis-0  bg-slate-50 rounded-tl rounded-bl inline-flex flex-row justify-start items-center dark:bg-gray-700">
                                        <div className="h-[12rem] relative pl-[50%] overflow-hidden">
                                            <img
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                src={banner}
                                            />
                                        </div>
                                        <div className="self-stretch px-3 py-5 flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch flex-col justify-start items-start gap-3 flex mb-2">
                                                <div className="self-stretch text-slate-800 text-base font-medium leading-5 line-clamp-2 dark:text-stone-200">
                                                    {title}
                                                </div>
                                                <div className="self-stretch text-slate-500 text-sm font-normal leading-4 tracking-tight whitespace-pre-line line-clamp-5 dark:text-gray-400">
                                                    {descriptions}
                                                </div>
                                            </div>
                                            {link ? (
                                                <div className="self-stretch justify-center items-center gap-1.5 inline-flex align-text-bottom">
                                                    <div className="w-5 h-5 relative rounded-full  bg-indigo-100 dark:bg-indigo-900">
                                                        <div className="w-4 h-4 left-[2px] top-[2px] absolute">
                                                            {/* <img src="./misc/link.svg" /> */}
                                                            <SVGbyTheme svg="./misc/link.svg" />
                                                        </div>
                                                    </div>
                                                    <div className="grow shrink h-full basis-0 flex-col justify-center items-start inline-flex relative top-[1px]">
                                                        <div className="text-indigo-500  text-xs font-bold leading-4 cursor-pointer dark:text-indigo-300">
                                                            <a href={link} target="_blank" className="inline">
                                                                {link}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={`works_rows_${rowIndex}`}
                                className="self-stretch justify-start items-start gap-[1rem] inline-flex"
                            >
                                {_map(displayRow, (displayItem, itemIndex) => {
                                    const { title, banner, descriptions, link } = displayItem || {}
                                    return (
                                        <div
                                            key={`works_rows_${rowIndex}_${itemIndex}`}
                                            className="grow shrink basis-0 bg-slate-50 rounded-tl rounded-bl flex-col justify-start items-center inline-flex dark:bg-gray-700"
                                        >
                                            <div className="w-full relative pt-[50%] overflow-hidden">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                    src={banner}
                                                />
                                            </div>

                                            <div className="self-stretch px-3 py-4 flex-col justify-start items-start gap-1 flex">
                                                <div className="self-stretch flex-col justify-start items-start gap-3 flex mb-2">
                                                    <div className="self-stretch text-slate-800 text-base font-medium leading-5  line-clamp-1 dark:text-stone-200">
                                                        {title}
                                                    </div>
                                                    <div className="self-stretch text-slate-500 text-sm font-normal leading-4 tracking-tight whitespace-pre-line line-clamp-3 dark:text-gray-400">
                                                        {descriptions}
                                                    </div>
                                                </div>
                                                {link ? (
                                                    <div className="self-stretch justify-center items-center gap-1.5 inline-flex align-text-bottom">
                                                        <div className="w-5 h-5 relative rounded-full  bg-indigo-100 dark:bg-indigo-900">
                                                            <div className="w-4 h-4 left-[2px] top-[2px] absolute">
                                                                {/* <img src="./misc/link.svg" /> */}
                                                                <SVGbyTheme svg="./misc/link.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="grow shrink h-full basis-0 flex-col justify-center items-start inline-flex relative top-[1px]">
                                                            <div className="text-indigo-500  text-xs font-bold leading-4 cursor-pointer dark:text-indigo-300">
                                                                <a href={link} target="_blank" className="inline">
                                                                    {link}
                                                                </a>
                                                            </div>
                                                        </div>
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

export default Works

// ********** helper **********
