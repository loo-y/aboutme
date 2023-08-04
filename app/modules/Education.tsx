import education from '../api/mockinfo/education'
import { map as _map } from 'lodash'

const Education = () => {
    const { data, title } = education || {}

    return (
        <div className="education-module">
            <div className="p-4 flex-col justify-start items-start gap-4 inline-flex w-full min-w-[36rem]">
                <div className="text-center text-slate-800 dark:text-white text-2xl font-medium leading-none tracking-tight">
                    {title}
                </div>
                <div className="self-stretch flex-col justify-start items-start pt-2 flex pb-2">
                    {_map(data, (eduItem, index) => {
                        const { school, schoolFull, startDate, college, graduationDate, logo, major, minor, degree } =
                            eduItem || {}
                        const isPresent = isNaN(graduationDate as any)
                        return (
                            <div
                                key={`education_${index}`}
                                className={` eduitem w-full px-3 py-2 ${
                                    isPresent ? 'bg-violet-50' : 'bg-slate-50 dark:bg-gray-900'
                                } self-stretch grow shrink basis-0 justify-center items-center gap-2 inline-flex mb-5 last:mb-0`}
                            >
                                <div className="relative flex-col inline-flex justify-center items-center rounded">
                                    <img src={logo} className="inline h-16" />
                                </div>
                                <div className="grow shrink basis-0 relative self-stretch flex-col justify-center items-start gap-1 inline-flex ml-2">
                                    <div className="text-slate-500 font-normal  tracking-tight text-sm  line-clamp-1">
                                        {college}
                                    </div>
                                    <div className="text-slate-800 relative font-medium leading-5 text-base line-clamp-2 mb-1">
                                        {schoolFull}
                                    </div>
                                </div>
                                <div className="self-stretch flex-col justify-start items-end gap-1 inline-flex max-w-[30rem] ml-3">
                                    <div
                                        className={`px-0.5 py-2 align-text-top ${
                                            isPresent ? 'bg-violet-100' : ''
                                        } rounded-sm flex-col justify-center items-center flex`}
                                    >
                                        <div
                                            className={`text-center ${
                                                isPresent ? 'text-violet-500 rounded-3xl' : 'text-slate-500'
                                            } text-xs font-normal leading-3 tracking-tight`}
                                        >
                                            Sep 2010 - Jul 2013
                                        </div>
                                    </div>
                                    <div className="justify-center items-center gap-1 inline-flex">
                                        <div className="justify-center items-center gap-0.5 flex">
                                            <div className="text-slate-500 text-sm font-bold tracking-tight mt-0.5">
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
