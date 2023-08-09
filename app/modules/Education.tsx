import education from '../api/mockinfo/education'
import { map as _map } from 'lodash'
import { formatEnDateMY, isValidDate } from '@/app/util/date'

const Education = () => {
    const { data, title } = education || {}

    return (
        <div className="education-module">
            <div className="p-4 flex-col justify-start items-start gap-4 inline-flex w-full min-w-[36rem]">
                <div className="text-center text-slate-800 dark:text-zinc-200 text-2xl font-medium leading-none tracking-tight">
                    {title}
                </div>
                <div className="self-stretch flex-col justify-start items-start pt-2 flex pb-2">
                    {_map(data, (eduItem, index) => {
                        const { school, schoolFull, startDate, college, graduationDate, logo, major, minor, degree } =
                            eduItem || {}
                        const isPresent = !isValidDate(graduationDate)
                        const startDateFormatted = formatEnDateMY(startDate)
                        const graduationDateFormatted = isPresent ? `isPresent` : formatEnDateMY(graduationDate)
                        return (
                            <div
                                key={`education_${index}`}
                                className={` eduitem w-full px-3 py-2 ${
                                    isPresent ? 'bg-violet-50 dark:bg-violet-950' : 'bg-slate-50 dark:bg-gray-900'
                                } self-stretch grow shrink basis-0 justify-center items-center gap-2 inline-flex mb-5 last:mb-0`}
                            >
                                <div className="relative flex-col inline-flex justify-center items-center rounded">
                                    <img src={logo} className="inline h-16" />
                                </div>
                                <div className="grow shrink basis-0 relative self-stretch flex-col justify-center items-start gap-1 inline-flex ml-2">
                                    <div className="text-slate-500 font-normal  tracking-tight text-sm  line-clamp-1 dark:text-stone-300">
                                        {college}
                                    </div>
                                    <div className="text-slate-800 relative font-medium leading-5 text-base line-clamp-2 mb-1 dark:text-stone-200">
                                        {schoolFull}
                                    </div>
                                </div>
                                <div className="self-stretch flex-col justify-start items-end gap-1 inline-flex max-w-[30rem] ml-3">
                                    <div
                                        className={`py-2 align-text-top ${
                                            isPresent
                                                ? 'px-2 bg-violet-100 dark:bg-violet-900 rounded-md'
                                                : 'pl-2 rounded-sm'
                                        }  flex-col justify-center items-center flex`}
                                    >
                                        <div
                                            className={`text-center ${
                                                isPresent
                                                    ? 'text-violet-500 rounded-3xl dark:text-violet-100 '
                                                    : 'text-slate-500 dark:text-stone-400'
                                            } text-xs font-normal leading-3 tracking-tight`}
                                        >
                                            {isPresent
                                                ? graduationDateFormatted
                                                : `${startDateFormatted} - ${graduationDateFormatted}`}
                                        </div>
                                    </div>
                                    <div className="justify-center items-center gap-1 inline-flex">
                                        <div className="justify-center items-center gap-0.5 flex">
                                            <div
                                                className={`text-slate-500 text-sm font-bold tracking-tight mt-0.5 ${
                                                    isPresent ? 'dark:text-gray-300' : 'dark:text-zinc-300 '
                                                }`}
                                            >
                                                <span>{major}</span>
                                                {degree ? (
                                                    <>
                                                        {' '}
                                                        - <span className="font-bold"> {degree}</span>
                                                    </>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education
